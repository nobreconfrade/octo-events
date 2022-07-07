import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEventDto } from './dto/events.dto';
import { Event, EventDocument } from './schemas/events.schema';

export class EventsService {
  constructor(
    @InjectModel(Event.name) private readonly eventModel: Model<EventDocument>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    console.log('Creating event...');
    const createdEvent = await this.eventModel.create(createEventDto.toModel());
    console.log(
      `Event created: action=${createdEvent.action}, number=${createdEvent.number}`,
    );
    return createdEvent;
  }

  async findIssue(number: number): Promise<Event[]> {
    console.log(`Searching issue with number ${number}...`);
    return this.eventModel
      .find({ number: number }, { __v: false, _id: false })
      .exec();
  }
}
