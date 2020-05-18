# Plantilla Hotspot

## Si tienes el proyecto instalado ignora los pasos de abajo

Cada vez que se haga un cambio al proyecto en este repositorio, deberás bajarlos a tu máquina local (tú PC) para así obtener la última versión del proyecto y mantener siempre actualizado el proyecto en tú máquina para no tener problemas en el futuro.

**El siguiente comando descargara los cambios y actulizara el proyecto que se encuentra en tu PC:**
* Abrir la terminal en la ubicación del proyecto y escribe: `git pull` 


## Descargando el proyecto a tú máquina local

**1. Programas necesarios:**
* Instala Git **(git for windows)**: https://git-scm.com/
* Instala NodeJs usando el `.msi` **(for windows / la versión LTS)** : https://nodejs.org/es/
* Instalar NPM pero **ojo se instala automáticamente al instalar node**.
* Comprueba que se instaló correctamente node y npm. Escribe en la terminal los sig. comandos:
  * Comando para npm: `npm -v` o `npm --version`
  * Comando para node js: `node -v` o `node --version`

**2. Pasos para instalar el proyecto en tú PC:**
* Abre un terminal **(cmd, windows bash (wsl))** en la ruta que desees guardar el proyecto.
* Esribe el siguiente comando para descargar el proyecto **(clonarlo en tú pc)**: `git clone url-del-repositorio-github`
* Escribe el siguiente comando para instalar gulp globalmente **(gulp es muy importante, permitira automatizar tareas que tendrias que hacer manualmente cada vez que trabajes en el proyecto**: `npm install -g gulp-cli`
*  **El sig. comando descargará los paquetes necesarios para el correcto funcionamiento del proyecto**: `npm install` 
* Escribe el siguiente comando para trabajar en desarrollo **(Al ejecutar el comandor veras como se abre el proyecto en tu navegador)**: `gulp dev`
* Escribe `gulp production` cuando necesites subir el proyecto al server en producción.

**Nota**: La terminal siempre debe apuntar a la ubicación del proyecto para ejecutar correctamente los comandos anteriores.

![image preview](https://repository-images.githubusercontent.com/258600299/54d61a00-9912-11ea-9313-87a6b04cff94)
