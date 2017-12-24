import { AnyAction } from 'redux';

export enum InputActionTypes {
  KeyPressed = 'KEY_PRESSED',
  KeyReleased = 'KEY_RELEASED'
}

export function keyPressed(keyCode: number): AnyAction {
  return {
    type: InputActionTypes.KeyPressed,
    keyCode
  };
}

export function keyReleased(keyCode: number): AnyAction {
  return {
    type: InputActionTypes.KeyReleased,
    keyCode
  };
}
