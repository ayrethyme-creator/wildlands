from __future__ import annotations

import os
from pathlib import Path
import sys
import tempfile
import unittest
from unittest import mock


HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import gen_steward
import gen_runner
import scrying_glass_client


class ScryingPipelineTests(unittest.TestCase):
    def test_prop_detection_uses_words_not_species_name_substrings(self):
        self.assertEqual(
            gen_runner.pick_composition("lean loggerhead turtle swimming"),
            gen_runner.COMPOSITION,
        )
        self.assertEqual(
            gen_runner.pick_composition("small fox perched on a fallen log"),
            gen_runner.PROP_COMPOSITION,
        )

    def test_cloud_config_selects_public_gateway_and_token(self):
        with tempfile.TemporaryDirectory() as directory:
            config = Path(directory) / "wildlands_scrying.json"
            config.write_text(
                '{"base_url":"https://example.test/wildlands-scry","token":"secret"}',
                encoding="utf-8",
            )
            with mock.patch.object(scrying_glass_client, "CONFIG_PATH", config), mock.patch.dict(
                os.environ,
                {"WILDLANDS_SCRYING_URL": "", "WILDLANDS_SCRYING_TOKEN": ""},
                clear=False,
            ):
                self.assertEqual(
                    scrying_glass_client._connection(),
                    ("https://example.test/wildlands-scry", "secret"),
                )

    def test_completed_job_downloads_its_exact_attached_output(self):
        job = {
            "gpu_job_id": "gpu-ours",
            "status": "done",
            "outputs": [
                {
                    "filename": "scrying_glass_00042_.png",
                    "subfolder": "ninetails",
                    "media_type": "image",
                }
            ],
        }
        with mock.patch.object(gen_steward.sg, "_queue", return_value=[job]), mock.patch.object(
            gen_steward.sg, "_download", return_value=Path("sprite.png")
        ) as download:
            result = gen_steward.wait_and_fetch("gpu-ours", "sprite.png", timeout=1)
        self.assertIs(result, True)
        self.assertEqual(download.call_args.args[1], "/api/outputs/media/scrying_glass_00042_.png")
        self.assertEqual(download.call_args.kwargs["query"]["subfolder"], "ninetails")


if __name__ == "__main__":
    unittest.main()
