import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Client } from './entities/client.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    const findClient = await this.prisma.client.findFirst({
      where: { email: createClientDto.email },
    });

    if (findClient) {
      throw new ConflictException('Client already exists!');
    }

    const client = new Client();

    Object.assign(client, createClientDto);

    const createdClient = await this.prisma.client.create({
      data: client,
    });

    return plainToInstance(Client, createdClient);
  }

  async findByEmail(email: string) {
    const findClient = await this.prisma.client.findFirst({
      where: { email },
    });

    return findClient;
  }

  async findAll() {
    const findClient = await this.prisma.client.findMany();
    return plainToInstance(Client, findClient);
  }

  private async findClientOrFail(id: string): Promise<Client> {
    const client = await this.prisma.client.findUnique({
      where: { id },
    });

    if (!client) {
      throw new NotFoundException(`Client not found!`);
    }

    return client;
  }

  async findOne(id: string) {
    const client = await this.findClientOrFail(id);
    return plainToInstance(Client, client);
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    await this.findClientOrFail(id);

    const updatedClient = await this.prisma.client.update({
      where: { id },
      data: updateClientDto,
    });

    return plainToInstance(Client, updatedClient);
  }

  async remove(id: string) {
    await this.findClientOrFail(id);

    return await this.prisma.client.delete({
      where: { id },
    });
  }
}
