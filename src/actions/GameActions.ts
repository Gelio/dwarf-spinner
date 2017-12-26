import { AnyAction } from 'redux';

import { GameStateType } from 'common/GameStateType';

export enum GameActionTypes {
  ChangeGameState = 'CHANGE_GAME_STATE',
  ScoreUpdate = 'SCORE_UPDATE',
  ScoreReset = 'SCORE_RESET'
}

export function changeGameState(newState: GameStateType): AnyAction {
  return {
    type: GameActionTypes.ChangeGameState,
    newState
  };
}

export function updateScore(newScore: number): AnyAction {
  return {
    type: GameActionTypes.ScoreUpdate,
    newScore
  };
}

export function resetScore(): AnyAction {
  return {
    type: GameActionTypes.ScoreReset
  };
}
