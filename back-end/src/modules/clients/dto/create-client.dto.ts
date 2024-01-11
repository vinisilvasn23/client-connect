import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import {
  IsString,
  MaxLength,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @ApiProperty({
    description: 'Nome do usuário (máximo 80 caracteres)',
    type: String,
  })
  @IsString()
  @MaxLength(80)
  fullName: string;

  @ApiProperty({
    description: 'Email',
    type: String,
  })
  @IsString()
  @MaxLength(60)
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha (mínimo 8 caracteres)',
    type: String,
  })
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;

  @ApiProperty({
    description: 'Telefone',
    type: String,
  })
  @IsPhoneNumber('BR')
  phone: string;

  @IsDate()
  @Transform(() => new Date(), { groups: ['transform'] })
  registrationDate: Date = new Date();
}
