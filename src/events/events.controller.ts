import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { CreateEventDto } from './dto/events.dto';
import { EventsService } from './events.service';
import { CreateEventsPipe } from './pipes/events.pipes';
import { Event } from './schemas/events.schema';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @UsePipes(new CreateEventsPipe())
  async create(@Body() body: CreateEventDto) {
    await this.eventsService.create(body);
  }

  @Get('/issues/:number')
  async getByIssue(@Param('number') number: number): Promise<Event[]> {
    return this.eventsService.findIssue(number);
  }
}
