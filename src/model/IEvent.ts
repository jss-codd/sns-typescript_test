export interface IEvent {
  event: string; // event name
  enabled: boolean; // should triggered ?
  senders: string[]; // list of senders
}
