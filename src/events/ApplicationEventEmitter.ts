import { EventEmitter } from 'events';
import { BaseEvent } from 'events/BaseEvent';

export class ApplicationEventEmitter extends EventEmitter {
  public emitAppEvent(event: BaseEvent) {
    this.emit(event.eventType, event);
  }
}
