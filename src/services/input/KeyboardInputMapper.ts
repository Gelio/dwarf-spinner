import { KeyboardKeys } from 'common/KeyboardKeys';

import { keyPressed, keyReleased } from 'actions/InputActions';
import { store } from 'store';

import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';
import { ReleaseDwarfEvent } from 'events/ReleaseDwarfEvent';
import { RestartEvent } from 'events/RestartEvent';

export class KeyboardInputMapper {
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
    const { keyCode } = event;

    if (this.isHoldableKey(keyCode)) {
      store.dispatch(keyPressed(keyCode));
    }
  }

  private onKeyUp(event: KeyboardEvent) {
    const { keyCode } = event;

    if (this.isHoldableKey(keyCode)) {
      return store.dispatch(keyReleased(keyCode));
    }

    this.handleNotHoldableKey(keyCode);
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
