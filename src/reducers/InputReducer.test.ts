import { keyPressed, keyReleased } from 'actions/InputActions';
import { inputReducer } from './InputReducer';

describe('inputReducer', () => {
  describe('pressedKeys', () => {
    it('should reflect pressed key', () => {
      const action = keyPressed(1);

      const result = inputReducer(undefined, action);

      expect(result.get('pressedKeys').has(1)).toBe(true);
    });

    it('should add another pressed key', () => {
      const firstAction = keyPressed(1);
      const initialState = inputReducer(undefined, firstAction);

      const secondAction = keyPressed(2);

      const result = inputReducer(initialState, secondAction);

      expect(result.get('pressedKeys').size).toBe(2);
    });

    it('should release a key', () => {
      const firstAction = keyPressed(1);
      const initialState = inputReducer(undefined, firstAction);

      const releaseAction = keyReleased(1);

      const result = inputReducer(initialState, releaseAction);

      expect(result.get('pressedKeys').has(1)).toBe(false);
    });
  });
});
