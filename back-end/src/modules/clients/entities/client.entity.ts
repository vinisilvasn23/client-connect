import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class Client {
  readonly id: string;

  fullName: string;

  email: string;

  @Exclude()
  password: string;

  phone: string;

  registrationDate: Date;

  constructor() {
    this.id = randomUUID();
  }
}
