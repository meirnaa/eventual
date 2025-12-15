import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './eventcontroller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [EventController],
  providers: [EventService, PrismaService],
})
export class EventModule {}
