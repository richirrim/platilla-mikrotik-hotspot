# Plantilla Hotspot

## Si tienes el proyecto instalado ignora los pasos de abajo

Cada vez que se suba un cambio o se haga un cambio al proyecto en este repositorio deberás bajar esos cambios a tu máquina local (tú PC) para así obtener la última versión del proyecto y mantener siempre actualizado el proyecto para no tener problemas en el futuro.

**El siguiente comando descargara los cambios y actulizara el proyecto que se encuentra en tu PC:**
* Abrer un terminal en la ubicación del proyecto y escribe: `git pull` 


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
* Escribe el siguiente comando para instalar gulp globalmente **(gulp es muy importante,  descargará los paquetes necesarios para el correcto funcionamiento del proyecto)**: `npm install -g gulp-cli`
* Escribe el siguiente comando en la terminal (importante tener actualizado node y npm): `npm install` 
* Escribe el siguiente comando para trabajar en desarrollo **(Al ejecutar el comandor veras como se abre el proyecto en tu navegador)**: `gulp dev`
* Escribe `gulp production` cuando necesites subir el proyecto al server en producción.

![image preview](https://repository-images.githubusercontent.com/258600299/54d61a00-9912-11ea-9313-87a6b04cff94)
