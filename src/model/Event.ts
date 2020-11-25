/*
Interface Event type 
*/
import { IEvent } from './IEvent';

export class Event {
  event: string;
  enabled: boolean;
  senders: string[];
  constructor(event: IEvent) {
    this.event = event.event;
    this.enabled = event.enabled;
    this.senders = event.senders;
  }
}
