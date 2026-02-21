import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Se activa el cors para la comunicacion con el frontend
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
