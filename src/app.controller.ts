import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { IEventDtoRequest } from './model/IEventDtoRequest';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*
    API to handle event 
    Payload type : 
      {
        "event" : "<event name>",
        "message" : "<notify message>"
        }
  */
  @Post('event')
  handleEvents(@Body() eventDtoRequest: IEventDtoRequest): string {
    return this.appService.handleEvents(
      eventDtoRequest.event,
      eventDtoRequest.message,
    );
  }
}
