import { KeyboardKeys } from 'common/KeyboardKeys';

import { keyPressed, keyReleased } from 'actions/InputActions';
import { store } from 'store';

import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';
import { ReleaseDwarfEvent } from 'events/ReleaseDwarfEvent';
import { RestartEvent } from 'events/RestartEvent';

export class KeyboardInputHandler {
  private readonly eventEmitter: ApplicationEventEmitter;
  private readonly holdableKeys: number[] = [
    KeyboardKeys.ArrowDown,
    KeyboardKeys.ArrowLeft,
    KeyboardKeys.ArrowRight,
    KeyboardKeys.ArrowUp
  ];

  constructor(eventEmitter: ApplicationEventEmitter) {
    this.eventEmitter = eventEmitter;

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  public init() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  }

  public destroy() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
  }

  private onKeyDown(event: KeyboardEvent) {
    if (this.isHoldableKey(event.keyCode)) {
      return;
    }

    store.dispatch(keyPressed(event.keyCode));
  }

  private onKeyUp(event: KeyboardEvent) {
    if (this.isHoldableKey(event.keyCode)) {
      return store.dispatch(keyReleased(event.keyCode));
    }

    this.handleNotHoldableKey(event.keyCode);
  }

  private isHoldableKey(keyCode: number) {
    return this.holdableKeys.indexOf(keyCode) !== -1;
  }

  private handleNotHoldableKey(keyCode: number) {
    switch (keyCode) {
      case KeyboardKeys.R:
        this.eventEmitter.emitAppEvent(new RestartEvent());
        break;

      case KeyboardKeys.Space:
        this.eventEmitter.emitAppEvent(new ReleaseDwarfEvent());
        break;

      default:
        break;
    }
  }
}
