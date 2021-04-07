import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { getApiPrefix, getApiVersion } from './Interface/utils/constant';
import { MainModule } from './MainModule';

const PORT = process.env.PORT || 3000;
const API_PREFIX = getApiPrefix();
const API_VERSION = getApiVersion();
const { version } = require('../package.json')

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.setGlobalPrefix(API_PREFIX)
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe())
  const options = new DocumentBuilder()
    .setTitle('api-park-monitor')
    .setDescription('Recebe dados de monitoramento de garagens')
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup(`${API_PREFIX}/${API_VERSION}/api-docs`, app, document)

  await app.listen(PORT);
}

bootstrap();
