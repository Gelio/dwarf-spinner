import { Map as ImmutableMap } from 'immutable';
import { AnyAction } from 'redux';

import { GameActionTypes } from 'actions/GameActions';

import { GameStateType } from 'common/GameStateType';

export type GameState = ImmutableMap<string, any>;

const defaultState: GameState = ImmutableMap({
  gameState: GameStateType.AcceleratingSpinner
});

export function gameReducer(state: GameState = defaultState, action: AnyAction) {
  switch (action.type) {
    case GameActionTypes.ChangeGameState:
      return state.setIn(['gameState'], action.newState);

    default:
      return state;
  }
}
