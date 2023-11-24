import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsString,
  IsDate,
  IsEmail,
  IsPhoneNumber,
  MaxLength,
} from 'class-validator';

export class CreateContactDto {
  @ApiProperty({
    description: 'Nome do contato',
    type: String,
  })
  @IsString()
  @MaxLength(80)
  fullName: string;

  @ApiProperty({
    description: 'Email do contato',
    type: String,
  })
  @IsString()
  @MaxLength(60)
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Telefone do contato',
    type: String,
  })
  @IsPhoneNumber('BR')
  phone: string;

  @IsDate()
  @Transform(() => new Date(), { groups: ['transform'] })
  registrationDate: Date = new Date();
}
