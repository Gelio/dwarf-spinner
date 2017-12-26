import { BaseEvent } from 'events/BaseEvent';

export class HorizontalRotateDwarfReflector extends BaseEvent {
  public readonly angle: number;

  constructor(angle: number) {
    super();

    this.angle = angle;
  }
}
