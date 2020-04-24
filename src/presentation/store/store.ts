import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import { PositionState, reducer as positionReducer } from './position';
import { reducer as weatherReducer, WeatherState } from './weather';

export interface State {
  position: PositionState;
  weather: WeatherState;
}

const rootReducer = {
  position: positionReducer,
  weather: weatherReducer,
};

export const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(logger)
);

export const dispatch = store.dispatch.bind(store);
