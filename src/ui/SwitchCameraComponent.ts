import { wire } from 'hyperhtml/esm';

import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';
import { SwitchCameraEvent } from 'events/SwitchCameraEvent';

export function SwitchCameraComponent(eventEmitter: ApplicationEventEmitter): HTMLElement {
  function onClick() {
    eventEmitter.emitAppEvent(new SwitchCameraEvent());
  }

  return wire()`
    <button onclick=${onClick}>Switch camera</button>
  `;
}
