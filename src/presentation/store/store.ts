import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from 'redux';
import { PositionState, reducer as positionReducer } from './position';
import { reducer as weatherReducer, WeatherState } from './weather';

export interface State {
  position: PositionState;
  weather: WeatherState;
}
const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(require('redux-logger').logger);
}

const rootReducer = {
  position: positionReducer,
  weather: weatherReducer,
};

export const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(...middlewares)
);

export const dispatch = store.dispatch.bind(store);
