import { Map as ImmutableMap } from 'immutable';
import { AnyAction } from 'redux';

import { GameActionTypes } from 'actions/GameActions';

import { GameStateType } from 'common/GameStateType';

export type GameState = ImmutableMap<string, any>;

const defaultState: GameState = ImmutableMap({
  gameState: GameStateType.AcceleratingSpinner,
  currentScore: 0,
  highScore: 0
});

export function gameReducer(state: GameState = defaultState, action: AnyAction) {
  switch (action.type) {
    case GameActionTypes.ChangeGameState:
      return state.setIn(['gameState'], action.newState);

    case GameActionTypes.ScoreReset:
      return state.setIn(['currentScore'], 0);

    case GameActionTypes.ScoreUpdate:
      return state.merge({
        currentScore: action.newScore,
        highScore: Math.max(state.get('highScore'), action.newScore)
      });

    default:
      return state;
  }
}
