// users.controller.ts

import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { AuthGuard } from './guards/auth.guard.js';
import { LoggingInterceptor } from './interceptors/logging.interceptor.js';

@Controller('users')
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateUserDto,
  ) {
    console.log('5. Controller');

    return this.usersService.create(dto);
  }
}