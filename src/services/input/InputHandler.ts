import { Set as ImmutableSet } from 'immutable';

import { KeyboardKeys } from 'common/KeyboardKeys';

import { ApplicationWorld } from 'models/ApplicationWorld';

import { store } from 'store';

import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';
import { ReleaseDwarfEvent } from 'events/ReleaseDwarfEvent';
import { RestartEvent } from 'events/RestartEvent';

export class InputHandler {
  // @ts-ignore
  private readonly world: ApplicationWorld;
  private readonly eventEmitter: ApplicationEventEmitter;

  private dwarfReleased = false;

  constructor(world: ApplicationWorld, eventEmitter: ApplicationEventEmitter) {
    this.world = world;
    this.eventEmitter = eventEmitter;

    this.restartWorld = this.restartWorld.bind(this);
    this.releaseDwarf = this.releaseDwarf.bind(this);
  }

  public init() {
    this.eventEmitter.on(RestartEvent.name, this.restartWorld);
    this.eventEmitter.on(ReleaseDwarfEvent.name, this.releaseDwarf);
  }

  public destroy() {
    this.eventEmitter.removeListener(RestartEvent.name, this.restartWorld);
    this.eventEmitter.removeListener(ReleaseDwarfEvent.name, this.releaseDwarf);
  }

  public step(_timeDelta: number) {
    const dwarfBody = this.world.dwarf.body;
    const pressedKeys: ImmutableSet<number> = store.getState().input.getIn(['pressedKeys']);

    // FIXME: add proper rotation
    if (pressedKeys.has(KeyboardKeys.ArrowUp)) {
      dwarfBody.angularVelocity.x += 0.5;
    }
    if (pressedKeys.has(KeyboardKeys.ArrowDown)) {
      dwarfBody.angularVelocity.x -= 0.5;
    }
    if (pressedKeys.has(KeyboardKeys.ArrowLeft)) {
      dwarfBody.angularVelocity.y -= 0.5;
    }
    if (pressedKeys.has(KeyboardKeys.ArrowRight)) {
      dwarfBody.angularVelocity.y -= 0.5;
    }
  }

  private restartWorld() {
    this.world.models.forEach(model => model.reset());

    if (this.dwarfReleased) {
      this.world.physicsWorld.addConstraint(this.world.dwarfConstraint);
      this.dwarfReleased = false;
    }
  }

  private releaseDwarf() {
    if (this.dwarfReleased) {
      return;
    }

    this.world.physicsWorld.removeConstraint(this.world.dwarfConstraint);
    this.dwarfReleased = true;
  }
}
