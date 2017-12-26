import { Vec3 } from 'cannon';
import { Set as ImmutableSet } from 'immutable';

import { configuration } from 'configuration';

import { GameStateType } from 'common/GameStateType';
import { KeyboardKeys } from 'common/KeyboardKeys';

import { ApplicationWorld } from 'models/ApplicationWorld';

import { changeGameState } from 'actions/GameActions';
import { getGameState, store } from 'store';

import { AccelerateSpinnerEvent } from 'events/AccelerateSpinnerEvent';
import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';
import { HorizontalRotateDwarfReflector } from 'events/HorizontalRotateDwarfReflector';
import { HorizontalRotateSpinner } from 'events/HorizontalRotateSpinner';
import { ReleaseDwarfEvent } from 'events/ReleaseDwarfEvent';
import { RestartEvent } from 'events/RestartEvent';
import { ThrottleDwarfRotationEvent } from 'events/ThrottleDwarfRotationEvent';

export class InputHandler {
  // @ts-ignore
  private readonly world: ApplicationWorld;
  private readonly eventEmitter: ApplicationEventEmitter;

  private dwarfReleased = false;
  private hingeAngle = 0;
  private readonly hingeRotationAxis = new Vec3(0, 0, 1);

  private dwarfReflectorRotationAngle = 0;
  private readonly dwarfReflectorRotationAxis = new Vec3(0, 0, 1);

  constructor(world: ApplicationWorld, eventEmitter: ApplicationEventEmitter) {
    this.world = world;
    this.eventEmitter = eventEmitter;

    this.restartWorld = this.restartWorld.bind(this);
    this.releaseDwarf = this.releaseDwarf.bind(this);
    this.onAccelerateSpinnerEvent = this.onAccelerateSpinnerEvent.bind(this);
    this.onHorizontalRotateSpinnerEvent = this.onHorizontalRotateSpinnerEvent.bind(this);
    this.onHorizontalRotateDwarfReflectorEvent = this.onHorizontalRotateDwarfReflectorEvent.bind(
      this
    );
    this.onThrottleDwarfRotationEvent = this.onThrottleDwarfRotationEvent.bind(this);
  }

  public init() {
    this.eventEmitter.on(RestartEvent.name, this.restartWorld);
    this.eventEmitter.on(ReleaseDwarfEvent.name, this.releaseDwarf);
    this.eventEmitter.on(AccelerateSpinnerEvent.name, this.onAccelerateSpinnerEvent);
    this.eventEmitter.on(HorizontalRotateSpinner.name, this.onHorizontalRotateSpinnerEvent);
    this.eventEmitter.on(
      HorizontalRotateDwarfReflector.name,
      this.onHorizontalRotateDwarfReflectorEvent
    );
    this.eventEmitter.on(ThrottleDwarfRotationEvent.name, this.onThrottleDwarfRotationEvent);
  }

  public destroy() {
    this.eventEmitter.removeListener(RestartEvent.name, this.restartWorld);
    this.eventEmitter.removeListener(ReleaseDwarfEvent.name, this.releaseDwarf);
    this.eventEmitter.removeListener(AccelerateSpinnerEvent.name, this.onAccelerateSpinnerEvent);
    this.eventEmitter.removeListener(
      HorizontalRotateSpinner.name,
      this.onHorizontalRotateSpinnerEvent
    );
    this.eventEmitter.removeListener(
      HorizontalRotateDwarfReflector.name,
      this.onHorizontalRotateDwarfReflectorEvent
    );
    this.eventEmitter.removeListener(
      ThrottleDwarfRotationEvent.name,
      this.onThrottleDwarfRotationEvent
    );
  }

  public step(timeDelta: number) {
    const pressedKeys: ImmutableSet<number> = store.getState().input.getIn(['pressedKeys']);

    this.handleVerticalArrowKeys(pressedKeys, timeDelta);
    this.handleHorizontalArrowKeys(pressedKeys, timeDelta);
  }

  private restartWorld() {
    this.world.models.forEach(model => model.reset());
    this.hingeAngle = 0;
    store.dispatch(changeGameState(GameStateType.AcceleratingSpinner));

    if (this.dwarfReleased) {
      this.world.physicsWorld.addConstraint(this.world.dwarfConstraint);
      this.dwarfReleased = false;
    }
  }

  private releaseDwarf() {
    if (this.dwarfReleased) {
      return;
    }

    store.dispatch(changeGameState(GameStateType.DwarfInTheAir));

    this.world.physicsWorld.removeConstraint(this.world.dwarfConstraint);
    this.dwarfReleased = true;
  }

  private handleVerticalArrowKeys(pressedKeys: ImmutableSet<number>, timeDelta: number) {
    if (getGameState() !== GameStateType.AcceleratingSpinner) {
      return;
    }

    const tickAcceleration = configuration.spinnerAngularAcceleration * timeDelta;

    // FIXME: See issue #33 (no rotation is applied when hingeAngle changes)
    if (pressedKeys.has(KeyboardKeys.ArrowUp)) {
      this.accelerateSpinner(tickAcceleration);
    }
    if (pressedKeys.has(KeyboardKeys.ArrowDown)) {
      this.accelerateSpinner(-tickAcceleration);
    }
  }

  private handleHorizontalArrowKeys(pressedKeys: ImmutableSet<number>, timeDelta: number) {
    const leftPressed = pressedKeys.has(KeyboardKeys.ArrowLeft) ? 1 : -1;
    const rightPressed = pressedKeys.has(KeyboardKeys.ArrowRight) ? 1 : -1;

    if (leftPressed * rightPressed === 1) {
      // Either both on or both off
      return;
    }

    const gameState = getGameState();
    const direction = leftPressed === 1 ? 1 : -1;

    if (gameState === GameStateType.AcceleratingSpinner) {
      const angle = timeDelta * configuration.hingeAngularAcceleration;
      this.rotateHinge(direction * angle);
    } else {
      const angle = timeDelta * configuration.dwarfReflectorAngularAcceleration;
      this.rotateDwarfReflector(direction * angle);
    }
  }

  /**
   * Used during vertical swipes (mobile gestures)
   * @param event
   */
  private onAccelerateSpinnerEvent(event: AccelerateSpinnerEvent) {
    this.accelerateSpinner(event.velocity);
  }

  /**
   * Used during horizontal panning (mobile gestures)
   * @param event
   */
  private onHorizontalRotateSpinnerEvent(event: HorizontalRotateSpinner) {
    this.rotateHinge(event.angle);
  }

  private onHorizontalRotateDwarfReflectorEvent(event: HorizontalRotateDwarfReflector) {
    this.rotateDwarfReflector(event.angle);
  }

  private onThrottleDwarfRotationEvent() {
    const dwarfBody = this.world.dwarf.body;

    dwarfBody.angularVelocity.scale(
      configuration.dwarfRotationThrottleMultiplier,
      dwarfBody.angularVelocity
    );
  }

  private rotateHinge(angle: number) {
    this.hingeAngle += angle;

    this.world.fidgetSpinnerHinge.body.quaternion.setFromAxisAngle(
      this.hingeRotationAxis,
      this.hingeAngle
    );
  }

  private accelerateSpinner(amount: number) {
    this.world.fidgetSpinner.body.angularVelocity.x += amount;
  }

  private rotateDwarfReflector(angle: number) {
    if (!this.world.dwarf.spotlight) {
      return;
    }

    this.dwarfReflectorRotationAngle += angle;

    const maxAngle = configuration.dwarfReflectorMaxAngle;
    this.dwarfReflectorRotationAngle = Math.max(
      -maxAngle,
      Math.min(maxAngle, this.dwarfReflectorRotationAngle)
    );

    this.world.dwarf.spotlight.directionOffset.setFromAxisAngle(
      this.dwarfReflectorRotationAxis,
      this.dwarfReflectorRotationAngle
    );
  }
}
