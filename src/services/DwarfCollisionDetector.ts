import { ApplicationWorld } from 'models/ApplicationWorld';

import { GameStateType } from 'common/GameStateType';

import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';
import { DwarfGroundCollisionEvent } from 'events/DwarfGroundCollisionEvent';
import { RestartEvent } from 'events/RestartEvent';

import { changeGameState } from 'actions/GameActions';
import { store } from 'store';

export class DwarfCollisionDetector {
  private readonly eventEmitter: ApplicationEventEmitter;
  private readonly applicationWorld: ApplicationWorld;

  private dwarfCollided = false;

  constructor(eventEmitter: ApplicationEventEmitter, applicationWorld: ApplicationWorld) {
    this.eventEmitter = eventEmitter;
    this.applicationWorld = applicationWorld;

    this.onGroundCollision = this.onGroundCollision.bind(this);
    this.onRestartEvent = this.onRestartEvent.bind(this);
  }

  public init() {
    this.applicationWorld.groundBody.addEventListener('collide', this.onGroundCollision);
    this.eventEmitter.on(RestartEvent.name, this.onRestartEvent);
  }

  public destroy() {
    this.applicationWorld.groundBody.removeEventListener('collide', this.onGroundCollision);
    this.eventEmitter.removeListener(RestartEvent.name, this.onRestartEvent);
  }

  private onGroundCollision(event: any) {
    if (event.body !== this.applicationWorld.dwarf.body) {
      return;
    }

    if (!this.dwarfCollided) {
      store.dispatch(changeGameState(GameStateType.DwarfLanded));
    }

    this.eventEmitter.emitAppEvent(new DwarfGroundCollisionEvent(!this.dwarfCollided));
    this.dwarfCollided = true;
  }

  private onRestartEvent() {
    this.dwarfCollided = false;
  }
}
