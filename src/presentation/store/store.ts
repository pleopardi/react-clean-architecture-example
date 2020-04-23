import { combineReducers, createStore } from 'redux';
import { reducer as positionReducer } from './position/reducers';
import { reducer as weatherReducer } from './weather/reducers';

const rootReducer = {
  position: positionReducer,
  weather: weatherReducer,
};

export const store = createStore(combineReducers(rootReducer));

export const dispatch = store.dispatch.bind(store);
