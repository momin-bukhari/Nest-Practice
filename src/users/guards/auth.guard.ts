// auth.guard.ts

import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('2. Guard');

    const request = context
      .switchToHttp()
      .getRequest();

    const authorization =
      request.headers.authorization;

    return authorization === 'Bearer secret-token';
  }
}