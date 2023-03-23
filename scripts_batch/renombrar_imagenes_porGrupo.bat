@echo off
setlocal EnableDelayedExpansion

set /p "ruta=Ingrese la ruta de la carpeta: "
set "prefijo=imagen"
set "contador=1"

rem Lista de extensiones a procesar
set "extensiones=.png .jpg .jpeg .webp .gif .jfif"

rem Renombramos todos los archivos con las extensiones deseadas a un nombre temporal genérico
set "tempname=_tempimage"
for %%e in (%extensiones%) do (
  for %%a in ("%ruta%\*%%e") do (
    if not "%%~a"=="%~dpnx0" (
      set "extension=%%~xa"
      set "nuevo_nombre=!tempname!!contador!!extension!"
      ren "%%~a" "!nuevo_nombre!"
      set /a "contador+=1"
    )
  )
)

rem Renombramos los archivos al formato deseado
set "contador=1"
for %%e in (%extensiones%) do (
  set "encontradas="
  for %%a in ("%ruta%\*%%e") do set "encontradas=!encontradas!%%a,"
  if defined encontradas (
    set "encontradas=!encontradas:~0,-1!"
    for %%a in (!encontradas!) do (
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
)

rem Borramos los archivos temporales
del "%ruta%\%tempname%*"
