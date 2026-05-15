@echo off
cd /d "%~dp0out"
"C:\Users\DeGar\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m http.server 3000
