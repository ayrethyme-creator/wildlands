#!/usr/bin/env python3
"""Small cross-platform client for Wildlands jobs through Scrying Glass.

Ponyta can use the tailnet URL directly.  An Anthropic cloud session instead
loads a revocable bearer credential from ~/.claude/wildlands_scrying.json and
uses Halo's narrowly scoped Wildlands gateway.
"""

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path
import sys
import time
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlencode
from urllib.request import Request, urlopen


TAILNET_BASE_URL = "https://halo.tail34c017.ts.net:10444/scrying-glass"
CONFIG_PATH = Path(
    os.environ.get(
        "WILDLANDS_SCRYING_CONFIG",
        str(Path.home() / ".claude" / "wildlands_scrying.json"),
    )
)
WORKSPACE = "ninetails"
TERMINAL_STATES = {"done", "errored", "cancelled"}


class ClientError(RuntimeError):
    pass


def _connection() -> tuple[str, str]:
    env_url = os.environ.get("WILDLANDS_SCRYING_URL", "").strip()
    env_token = os.environ.get("WILDLANDS_SCRYING_TOKEN", "").strip()
    if env_url:
        return env_url.rstrip("/"), env_token
    if CONFIG_PATH.is_file():
        try:
            config = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
        except (OSError, UnicodeDecodeError, json.JSONDecodeError) as exc:
            raise ClientError(f"invalid Scrying config at {CONFIG_PATH}: {exc}") from exc
        if not isinstance(config, dict) or not str(config.get("base_url") or "").strip():
            raise ClientError(f"Scrying config at {CONFIG_PATH} needs base_url")
        return (
            str(config["base_url"]).rstrip("/"),
            str(config.get("token") or "").strip(),
        )
    return TAILNET_BASE_URL, ""


DEFAULT_BASE_URL = _connection()[0]


def _url(base_url: str, path: str, query: dict[str, object] | None = None) -> str:
    result = base_url.rstrip("/") + "/" + path.lstrip("/")
    if query:
        result += "?" + urlencode(query)
    return result


def _headers(accept: str, has_body: bool = False) -> dict[str, str]:
    headers = {"Accept": accept}
    if has_body:
        headers["Content-Type"] = "application/json"
    _, token = _connection()
    if token:
        headers["Authorization"] = "Bearer " + token
    return headers


def _request(
    base_url: str,
    method: str,
    path: str,
    *,
    payload: dict[str, object] | None = None,
    timeout: float = 30.0,
    query: dict[str, object] | None = None,
) -> object:
    body = json.dumps(payload).encode("utf-8") if payload is not None else None
    request = Request(
        _url(base_url, path, query),
        data=body,
        headers=_headers("application/json", body is not None),
        method=method,
    )
    try:
        with urlopen(request, timeout=timeout) as response:
            raw = response.read()
    except HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        raise ClientError(f"HTTP {exc.code}: {detail or exc.reason}") from exc
    except URLError as exc:
        raise ClientError(f"Scrying Glass is unreachable: {exc.reason}") from exc
    if not raw:
        return {}
    try:
        return json.loads(raw.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError) as exc:
        raise ClientError("Scrying Glass returned a non-JSON response") from exc


def _download(
    base_url: str,
    path: str,
    destination: Path,
    query: dict[str, object] | None = None,
) -> Path:
    request = Request(_url(base_url, path, query), headers=_headers("*/*"))
    try:
        with urlopen(request, timeout=120.0) as response:
            destination.parent.mkdir(parents=True, exist_ok=True)
            destination.write_bytes(response.read())
    except HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        raise ClientError(f"download failed with HTTP {exc.code}: {detail}") from exc
    except URLError as exc:
        raise ClientError(f"download failed: {exc.reason}") from exc
    return destination


def _queue(base_url: str) -> list[dict[str, object]]:
    result = _request(
        base_url,
        "GET",
        "/api/queue/state",
        query={"workspace": WORKSPACE},
    )
    if not isinstance(result, dict):
        raise ClientError("invalid queue response")
    queue = result.get("queue", [])
    return queue if isinstance(queue, list) else []


def _print_json(value: object) -> None:
    print(json.dumps(value, indent=2, sort_keys=True))


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)
    sub.add_parser("health")
    sub.add_parser("queue")
    cancel = sub.add_parser("cancel")
    cancel.add_argument("job_id")
    download = sub.add_parser("download")
    download.add_argument("filename")
    download.add_argument("--subfolder", default="")
    download.add_argument("--out", type=Path, required=True)
    args = parser.parse_args()
    base_url, _ = _connection()
    if args.command == "health":
        _print_json(_request(base_url, "GET", "/healthz"))
    elif args.command == "queue":
        _print_json({"ok": True, "queue": _queue(base_url)})
    elif args.command == "cancel":
        _print_json(
            _request(
                base_url,
                "POST",
                f"/api/queue/{quote(args.job_id, safe='')}/cancel",
                query={"workspace": WORKSPACE},
            )
        )
    elif args.command == "download":
        path = _download(
            base_url,
            f"/api/outputs/media/{quote(args.filename, safe='')}",
            args.out,
            query={"workspace": WORKSPACE, "subfolder": args.subfolder},
        )
        print(path.resolve())
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except ClientError as exc:
        print(f"error: {exc}", file=sys.stderr)
        raise SystemExit(1)
