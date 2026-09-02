// users.module.ts

import {
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';

import { UsersController } from './users.controller.js';
import { UsersService } from './users.service.js';
import { LoggerMiddleware } from './middleware/logger.middleware.js';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('users');
  }
}