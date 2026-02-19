Comandos que se deben utilizar para una correcta instalaccion:

1. Requisitos:
node -v
Mi version es: v20.20.0

npm -v
Mi version es 10.8.2

2. Instalar Nest CLI
npm install -g @nestjs/cli

Verificar version: nest --version
Mi version es: 11.0.16

3. Crear el proyecto Nest
nest new mi-api

4. Instalacion de dependencias

Conexión e integración de MongoDB con NestJS.
npm i mongoose @nestjs/mongoose

Manejo de variables de entorno (.env).
npm i @nestjs/config

Validación y transformación automática de datos (DTOs).
npm i class-validator class-transformer

Encriptación segura de contraseñas.
npm i bcrypt