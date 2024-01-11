import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwtAuth.guard';

@ApiTags('Contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createContactDto: CreateContactDto, @Request() req) {
    return this.contactsService.create(createContactDto, req.user.id);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findAll(@Request() req) {
    const contacts = await this.contactsService.findAll(req.user.id);
    return contacts;
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string, @Request() req) {
    const contact = await this.contactsService.findOne(id, req.user.id);
    return contact;
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
    @Request() req,
  ) {
    const updatedContact = await this.contactsService.update(
      id,
      req.user.id,
      updateContactDto,
    );
    return updatedContact;
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string, @Request() req) {
    const deletedContact = await this.contactsService.remove(id, req.user.id);
    return deletedContact;
  }
}
