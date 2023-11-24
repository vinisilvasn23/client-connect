import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(createContactDto: CreateContactDto, clientId: string) {
    const findContact = await this.prisma.contact.findFirst({
      where: { email: createContactDto.email },
    });

    if (findContact) {
      throw new ConflictException('Contact already exists!');
    }
    const contact = new Contact();
    Object.assign(contact, {
      ...createContactDto,
    });

    const newContact = await this.prisma.contact.create({
      data: {
        id: contact.id,
        fullName: contact.fullName,
        email: contact.email,
        phone: contact.phone,
        registrationDate: contact.registrationDate,
        clientId,
      },
    });

    return newContact;
  }

  async findAll(clientId: string) {
    const contacts = await this.prisma.contact.findMany({
      where: { clientId },
    });

    return contacts;
  }

  private async findContactOrFail(id: string, clientId: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { id, clientId },
    });
  
    if (!contact) {
      throw new NotFoundException(`Contact not found!`);
    }
  
    return contact;
  }

  async findOne(id: string, clientId: string) {
    const contact = await this.findContactOrFail(id, clientId);
    return contact;
  }

  async update(id: string, clientId: string, updateContactDto: UpdateContactDto) {
    await this.findContactOrFail(id, clientId);
  
    return await this.prisma.contact.update({
      where: { id, clientId },
      data: updateContactDto,
    });
  }

  async remove(id: string, clientId: string) {
    await this.findContactOrFail(id, clientId);
  
    return await this.prisma.contact.delete({
      where: { id, clientId },
    });
  }
}