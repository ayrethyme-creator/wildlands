@echo off
REM Start the art queue runner on the machine that has the GPU route.
REM
REM It watches the repository for job files a chat has pushed, runs those
REM batches through the normal gen_runner -> Scrying Glass path, and pushes the
REM finished PNGs back. Leave this window open; Ctrl+C stops it cleanly between
REM species.
REM
REM First time only, make the clone it works in:
REM     git clone -b claude/handoff-md-review-u6uaf3 https://github.com/ayrethyme-creator/wildlands C:\Claude\wildlands-artqueue

setlocal
if "%WILDLANDS_QUEUE_REPO%"=="" set WILDLANDS_QUEUE_REPO=C:\Claude\wildlands-artqueue
python -u "%~dp0queue_runner.py" %*
endlocal
pause
