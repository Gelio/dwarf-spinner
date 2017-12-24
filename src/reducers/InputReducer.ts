import { Map as ImmutableMap, Set as ImmutableSet } from 'immutable';
import { AnyAction } from 'redux';

import { InputActionTypes } from 'actions/InputActions';

interface PressedKeys {
  [keyCode: number]: boolean;
}

export interface InputState {
  pressedKeys: PressedKeys;
}

const defaultState = ImmutableMap({
  pressedKeys: ImmutableSet<number>()
});

export function inputReducer(state: ImmutableMap<string, any> = defaultState, action: AnyAction) {
  switch (action.type) {
    case InputActionTypes.KeyPressed:
      return state.updateIn(['pressedKeys'], (pressedKeys: ImmutableSet<number>) =>
        pressedKeys.add(action.keyCode)
      );

    case InputActionTypes.KeyReleased:
      return state.updateIn(['pressedKeys'], (pressedKeys: ImmutableSet<number>) =>
        pressedKeys.delete(action.keyCode)
      );

    default:
      return state;
  }
}
