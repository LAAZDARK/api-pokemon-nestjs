import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // forbidNonWhitelisted: true, //! Muestra error al recibir datos de mas
    }),
  );

  app.setGlobalPrefix('api/v1');
  await app.listen(4000);
}
bootstrap();
