import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { MainModule } from 'src/MainModule';

describe('ParkMonitorController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    require('dotenv').config();
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MainModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/park-monitor')
      .expect(200)
      .expect('Hello World!');
  });
});

async function addParkMonitor() {
  await 
}
