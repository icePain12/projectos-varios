@echo off
setlocal EnableDelayedExpansion

set /p "ruta=Ingrese la ruta de la carpeta: "
set "prefijo=imagen"
set "contador=1"

rem Renombramos todos los archivos a un nombre temporal genérico
set "tempname=_tempimage"
for %%a in ("%ruta%\*") do (
  if not "%%~a"=="%~dpnx0" (
    set "extension=%%~xa"
    set "nuevo_nombre=!tempname!!contador!!extension!"
    ren "%%~a" "!nuevo_nombre!"
    set /a "contador+=1"
  )
)

rem Renombramos los archivos al formato deseado
set "contador=1"
for %%a in ("%ruta%\%tempname%*") do (
  if not "%%~a"=="%~dpnx0" (
    set "extension=%%~xa"
    set "nuevo_nombre=!prefijo!!contador!!extension!"
    REM Verifica si el nuevo nombre ya existe
    if exist "!ruta!\!nuevo_nombre!" (
      echo "!nuevo_nombre!" ya existe. No se ha realizado ninguna acción.
    ) else (
      ren "%%~a" "!nuevo_nombre!"
      set /a "contador+=1"
    )
  )
)

rem Borramos los archivos temporales
del "%ruta%\%tempname%*"

