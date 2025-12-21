@echo off
echo Inicializando repositorio Git...
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/mosheperafan123-ux/mi-landing.git
echo Subiendo a GitHub...
git push -u origin main
pause
