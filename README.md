# BootcampBackendNodeJs

## Instalación y configuración de liberías
* Crear package.json: npm init -y
* Express: npm install express --save
* Babel: npm install @babel/cli @babel/core @babel/node @babel/preset-env @babel/plugin-proposal-optional-chaining @babel/preset-typescript typescript nodemon npm-run-all --save-dev
* TypeScript: npm install @types/express --save-dev
* lite-server: npm install lite-server -g
* Cors: npm install cors; npm install @types/cors --save-dev
* dotenv: npm install dotenv -P
* module-resolver: npm install babel-plugin-module-resolver --save-dev
* inquirer: npm install inquirer @types/inquirer --save-dev
* MongoDB: npm install mongodb --save;
npm install @types/mongodb --save-dev
* path: npm install --save path
* test: npm install jest @types/jest ts-jest --save-dev

## APIs
He creado tres endpoints:
* Obtener el listado de casas de un país seleccionado
http://localhost:3000/api/houses/country_code/ES
* Obtener los detalles de una casa
http://localhost:3000/api/houses/10006546
mock (http://localhost:3000/api/houses/1)
* Insertar una review
http://localhost:3000/api/houses/reviews

## Mongoose
He intentado desarrollar la implementación haciendo uso de mongoose pero no he conseguido solucionar un error relacionado con el tipo number.
He completado el desarrollo, pero no he conseguido que funcione.
El código está en la rama feature/mongoose

## Tests
He incluido los tests de los métodos usados en house.mappers y house.helpers
En la rama de mongoose también he incluido un par de tests de integración.
