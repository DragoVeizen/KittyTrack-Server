import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // ✅ Enable CORS
  app.enableCors({
    origin: '*', // 👈 Or restrict to specific origins like 'http://localhost:8081'
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
