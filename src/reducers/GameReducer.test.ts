import { changeGameState, resetScore, updateScore } from 'actions/GameActions';
import { gameReducer } from './GameReducer';

import { GameStateType } from 'common/GameStateType';

describe('gameReducer', () => {
  it('should change game state', () => {
    const action = changeGameState(GameStateType.AcceleratingSpinner);

    const result = gameReducer(undefined, action);

    expect(result.get('gameState')).toBe(GameStateType.AcceleratingSpinner);
  });

  it('should update current score', () => {
    const action = updateScore(50);

    const result = gameReducer(undefined, action);

    expect(result.get('currentScore')).toBe(50);
  });

  it('should reset current score', () => {
    const updateAction = updateScore(50);
    const initialState = gameReducer(undefined, updateAction);

    const resetAction = resetScore();
    const result = gameReducer(initialState, resetAction);

    expect(result.get('currentScore')).toBe(0);
  });

  it('should keep high score during reset', () => {
    const updateAction = updateScore(50);
    const initialState = gameReducer(undefined, updateAction);

    const resetAction = resetScore();
    const result = gameReducer(initialState, resetAction);

    expect(result.get('highScore')).toBe(50);
  });

  it('should update current score when new is higher', () => {
    const initialUpdateAction = updateScore(50);
    const initialState = gameReducer(undefined, initialUpdateAction);

    const secondUpdateAction = updateScore(60);
    const result = gameReducer(initialState, secondUpdateAction);

    expect(result.get('currentScore')).toBe(60);
  });
});
