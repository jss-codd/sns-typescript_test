import { Injectable, Inject } from '@nestjs/common';
import { IEvent } from './model/IEvent';
import { request } from 'request';
const notification = require('../config/notification.json');

@Injectable()
export class AppService {
  handleEvents(eventName: string, message: any): any {
    /* method to catch event*/
    return this.eventHandler(eventName, message);
  }

  eventHandler(eventName: string, message: string) {
    /*
      find events from notification.json and act properly
    */
    let event = notification.events.find(event => {
      return event.event == eventName;
    });
    if (event) {
      return this.processEvent(event, message);
    } else {
      // send message if no event found
      return 'INVALID_EVENT';
    }
  }

  async processEvent(event: IEvent, message: any) {
    // method to process events
    let availableSenders = event.senders.map(eventSender => {
      return notification.senders.find(sender => sender.id == eventSender);
    });
    let snsResponses = availableSenders.map(sender => {
      return this.sendSNS(sender, message);
    });
    return await Promise.all(snsResponses);
  }

  sendSNS(sender, message: any) {
    //delegate notification to SNS to handle
    switch (sender.id) {
      case 'SNS1':
        // TODO : handle SNS1 case here
        return new Promise((resolve, reject) => {
          resolve('SNS1' + message);
        });
      case 'webhook2':
        // TODO : handle webhook2 case here
        return request.get(sender.url);
      case 'webhook1':
        // TODO : handle webhook2 case here
        return request.get(sender.url);
      case 'console':
        return new Promise((resolve, reject) => {
          resolve('CONSOLE ' + message);
        });
    }
  }
}
