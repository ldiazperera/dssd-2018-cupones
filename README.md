# Desarrollo de Software en Sistemas Distribuidos 2018

* Brocchi, Ignacio
* Díaz Perera, Lucas
* Giménez, Jonatan


# Stack tenológico

* NodeJS 8.12
* Express 4.16
* Mongoose 5.3


# Para levantar la app

1) Instalar la versión de NodeJS mencionada. Puede obtenerse desde la página oficial https://nodejs.org/es/
2) Clonar el repositorio
3) En la raíz del proyecto, ejecutar el comando `npm install`.
4) En la raíz del proyecto, ejecutar el comando `node app.js`.

# Endpoints

Los endpoints de la app son:

* POST http://localhost:3001/cupones 
* GET http://localhost:3001/cupones/:code
* PUT http://localhost:3001/cupones/:code
* DELETE http://localhost:3001/cupones/:code

Se recomienda tener instalado el cliente de Postman (https://www.getpostman.com/) para poder testear los endpoints una vez levantada la aplicación.
