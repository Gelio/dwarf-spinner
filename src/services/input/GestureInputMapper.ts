import { Manager } from 'hammerjs';

import { configuration } from 'configuration';

import { AccelerateSpinnerEvent } from 'events/AccelerateSpinnerEvent';
import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';
import { ReleaseDwarfEvent } from 'events/ReleaseDwarfEvent';
import { RestartEvent } from 'events/RestartEvent';

export class GestureInputMapper {
  private readonly canvas: HTMLCanvasElement;
  private readonly canvasManager: HammerManager;

  private readonly eventEmitter: ApplicationEventEmitter;

  constructor(canvas: HTMLCanvasElement, eventEmitter: ApplicationEventEmitter) {
    this.canvas = canvas;
    this.eventEmitter = eventEmitter;

    this.canvasManager = new Manager(this.canvas);
    this.addRecognizers();

    this.onTap = this.onTap.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
  }

  public init() {
    this.canvasManager.on('tap', this.onTap);
    this.canvasManager.on('press', this.onPress);
    this.canvasManager.on('swipe', this.onSwipe);
  }

  public destroy() {
    this.canvasManager.off('tap', this.onTap);
    this.canvasManager.off('press', this.onPress);
    this.canvasManager.off('swipe', this.onSwipe);
  }

  private addRecognizers() {
    this.canvasManager.add(
      new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 50 })
    );

    this.canvasManager.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_VERTICAL }));

    this.canvasManager.add(new Hammer.Tap());

    this.canvasManager.add(new Hammer.Press());
  }

  private onTap() {
    this.eventEmitter.emitAppEvent(new ReleaseDwarfEvent());
  }

  private onPress() {
    this.eventEmitter.emitAppEvent(new RestartEvent());
  }

  private onSwipe(event: HammerInput) {
    const multiplier = -configuration.spinnerSwipeAccelerationMultiplier;
    const velocity = event.velocityY * multiplier;

    this.eventEmitter.emitAppEvent(new AccelerateSpinnerEvent(velocity));
  }
}
