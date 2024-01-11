import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtAuthGuard } from './jwtAuth.guard';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class ClientAuthGuard extends JwtAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext): boolean {
    const isJwtAuth = super.canActivate(context);

    if (!isJwtAuth) {
      return false;
    }

    const request = context.switchToHttp().getRequest();
    const clientIdFromRequest = request.params.id;
    const token = request.headers.authorization.split(' ')[1];

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    if (decodedToken.sub !== clientIdFromRequest) {
      return false;
    }

    return true;
  }
}
