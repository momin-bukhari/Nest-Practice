// users.service.ts

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';

@Injectable()
export class UsersService {
  create(dto: CreateUserDto) {
    console.log('6. Service');

    return {
      id: 1,
      name: dto.name,
      age: dto.age,
    };
  }
}