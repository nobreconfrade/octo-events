import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop()
  action: string;
  @Prop()
  number: number;
  @Prop()
  html_url: string;
  @Prop()
  title: string;
  @Prop()
  created_at: Date;
  @Prop()
  updated_at: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
