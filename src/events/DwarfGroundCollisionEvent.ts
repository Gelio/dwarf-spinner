import { BaseEvent } from 'events/BaseEvent';

export class DwarfGroundCollisionEvent extends BaseEvent {
  public readonly isInitial: boolean;

  constructor(isInitial: boolean) {
    super();

    this.isInitial = isInitial;
  }
}
