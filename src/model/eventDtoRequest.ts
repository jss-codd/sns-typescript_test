/*
Event DTO 
*/
import { IEventDtoRequest } from './IEventDtoRequest';

export class EventRequestDto implements IEventDtoRequest {
  event: string; // event nae
  message?: Object; // message to be notified

  constructor(iEventDtoRequest: IEventDtoRequest) {
    this.event = iEventDtoRequest.event;
    this.message = iEventDtoRequest.message;
  }
}
