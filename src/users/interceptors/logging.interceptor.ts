// logging.interceptor.ts

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor
  implements NestInterceptor
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> {
    console.log('3. Interceptor BEFORE');

    const start = Date.now();

    return next.handle().pipe(
      tap(() => {
        console.log(
          `7. Interceptor AFTER: ${
            Date.now() - start
          }ms`,
        );
      }),
    );
  }
}