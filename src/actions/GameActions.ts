import { AnyAction } from 'redux';

import { GameStateType } from 'common/GameStateType';

export enum GameActionTypes {
  ChangeGameState = 'CHANGE_GAME_STATE'
}

export function changeGameState(newState: GameStateType): AnyAction {
  return {
    type: GameActionTypes.ChangeGameState,
    newState
  };
}
