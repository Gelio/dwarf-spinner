import { combineReducers, createStore } from 'redux';

import { gameReducer, GameState } from 'reducers/GameReducer';
import { inputReducer, InputState } from 'reducers/InputReducer';

import { GameStateType } from 'common/GameStateType';

interface StoreState {
  input: InputState;
  game: GameState;
}

const reducer = combineReducers<StoreState>({
  input: inputReducer,
  game: gameReducer
});

export const store = createStore<StoreState>(
  reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export function getGameState(): GameStateType {
  return store.getState().game.get('gameState');
}
