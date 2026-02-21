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
npm install --save-dev @types/bcrypt

**@nestjs/jwt**: Proporciona las herramientas para generar y verificar tokens JWT (JSON Web Tokens), permitiendo que el servidor emita una key digital al usuario tras hacer login.
**@nestjs/passport & passport**: Es el estandar para autenticacion en Node. Permite implementar diferentes estrategias de seguridad de forma organizada.
npm install @nestjs/jwt @nestjs/passport passport passport-jwt passport-local

**passport-jwt**: Una estrategia de Passport que permite proteger rutas verificando que el usuario envie un token valido en sus peticiones.
**passport-local**: Estrategia para validar el inicio de sesión tradicional usando un identificador (Cédula) y una contraseña.
npm install -D @types/passport-jwt @types/passport-local