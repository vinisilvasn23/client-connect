import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ClientsModule } from '../clients/clients.module';
import { AuthController } from './auth.controller';
import { ClientsService } from '../clients/clients.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  imports: [
    ClientsModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '12h' },
    }),
  ],
  exports: [JwtModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, ClientsService, PrismaService],
})
export class AuthModule {}