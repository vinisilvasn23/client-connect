import { Body, Controller, Post, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() client: LoginDto, @Res() res: Response) {
    const token = await this.authService.login(client.email, client.password);
    return res.status(HttpStatus.OK).json({ token });
  }
}