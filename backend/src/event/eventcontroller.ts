/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Get, Param, Query } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  // GET /events?search=&tipo=
  @Get()
  findAll(
    @Query('search') search?: string,
    @Query('tipo') tipo?: 'GRATUITO' | 'PAGO',
  ) {
    return this.eventService.findAll({ search, tipo });
  }

  // GET /events/:id
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.eventService.findById(id);
  }
}
