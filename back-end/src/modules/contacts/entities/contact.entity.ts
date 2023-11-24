import { randomUUID } from 'crypto';
export class Contact {
  readonly id: string;
  fullName: string;
  email: string;
  phone: string;
  registrationDate: Date;
  client_id?: string;

  constructor() {
    this.id = randomUUID();
  }
}
