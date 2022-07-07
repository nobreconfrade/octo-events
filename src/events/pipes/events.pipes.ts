import { Injectable, PipeTransform } from '@nestjs/common';
import { CreateEventDto } from '../dto/events.dto';

@Injectable()
export class CreateEventsPipe implements PipeTransform {
  transform(value: any) {
    console.log('Parsing request body into CreateEventDto.');
    return new CreateEventDto(value);
  }
}
