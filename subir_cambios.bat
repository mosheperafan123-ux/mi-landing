@echo off
echo ==========================================
echo Subiendo cambios a GitHub...
echo (Si te pide credenciales, ingresa tu usuario y token/contraseña)
echo ==========================================
"C:\Program Files\Git\cmd\git.exe" push -u origin main --force
if %errorlevel% neq 0 (
    echo.
    echo Ocurrio un error. Asegurate de tener permisos en el repositorio.
) else (
    echo.
    echo ¡Subida exitosa!
)
pause
