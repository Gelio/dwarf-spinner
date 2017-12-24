import { combineReducers, createStore } from 'redux';

import { inputReducer, InputState } from 'reducers/InputReducer';

interface StoreState {
  input: InputState;
}

const reducer = combineReducers<StoreState>({
  input: inputReducer
});

export const store = createStore<StoreState>(
  reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
