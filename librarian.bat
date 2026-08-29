@echo off
REM The Librarian - the fact check. Reports what has been verified, what has not, and
REM fails if a checked sentence was edited underneath its check. Double-click me.
python "%~dp0design\tools\the_librarian.py"
echo.
pause
