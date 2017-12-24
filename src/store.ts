import { combineReducers, createStore } from 'redux';

import { inputReducer } from 'reducers/InputReducer';

const reducer = combineReducers({
  input: inputReducer
});

export const store = createStore(
  reducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
