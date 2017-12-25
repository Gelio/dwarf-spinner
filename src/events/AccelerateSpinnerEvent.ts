import { BaseEvent } from 'events/BaseEvent';

export class AccelerateSpinnerEvent extends BaseEvent {
  public readonly velocity: number;

  constructor(velocity: number) {
    super();

    this.velocity = velocity;
  }
}
