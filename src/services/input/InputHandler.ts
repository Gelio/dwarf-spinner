import { Vec3 } from 'cannon';
import { Set as ImmutableSet } from 'immutable';

import { configuration } from 'configuration';

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
  private hingeAngle = 0;
  private readonly hingeRotationAxis = new Vec3(0, 0, 1);

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
    const pressedKeys: ImmutableSet<number> = store.getState().input.getIn(['pressedKeys']);

    this.rotateFidgetSpinner(pressedKeys, _timeDelta);
    this.rotateHinge(pressedKeys, _timeDelta);
  }

  private restartWorld() {
    this.world.models.forEach(model => model.reset());
    this.hingeAngle = 0;

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

  private rotateFidgetSpinner(pressedKeys: ImmutableSet<number>, timeDelta: number) {
    const fidgetSpinnerBody = this.world.fidgetSpinner.body;
    const tickAcceleration = configuration.spinnerAngularAcceleration * timeDelta;

    if (pressedKeys.has(KeyboardKeys.ArrowUp)) {
      fidgetSpinnerBody.angularVelocity.x += tickAcceleration;
    }
    if (pressedKeys.has(KeyboardKeys.ArrowDown)) {
      fidgetSpinnerBody.angularVelocity.x -= tickAcceleration;
    }
  }

  private rotateHinge(pressedKeys: ImmutableSet<number>, timeDelta: number) {
    const hingeBody = this.world.fidgetSpinnerHinge.body;
    const tickAcceleration = timeDelta * configuration.hingeAngularAcceleration;

    const rotateLeft = pressedKeys.has(KeyboardKeys.ArrowLeft) ? 1 : -1;
    const rotateRight = pressedKeys.has(KeyboardKeys.ArrowRight) ? 1 : -1;

    if (rotateLeft * rotateRight === 1) {
      // Either both on or both off
      return;
    }

    if (rotateLeft > 0) {
      this.hingeAngle += tickAcceleration;
    }
    if (rotateRight > 0) {
      this.hingeAngle -= tickAcceleration;
    }

    hingeBody.quaternion.setFromAxisAngle(this.hingeRotationAxis, this.hingeAngle);
  }
}
