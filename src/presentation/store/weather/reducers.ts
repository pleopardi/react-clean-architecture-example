import { ACTION_TYPES, WeatherAction } from './actions';
import { ApplicationError } from 'errors/ApplicationError';
import { initialState, WeatherState } from './state';
import { WeatherModel } from 'features/weather';

export function reducer(
  state: WeatherState = initialState,
  action: WeatherAction
): WeatherState {
  switch (action.type) {
    case ACTION_TYPES.setError:
      return {
        ...state,
        error: action.payload as ApplicationError,
        weather: null,
      };
    case ACTION_TYPES.setIsLoading:
      return {
        ...state,
        isLoading: action.payload as boolean,
      };
    case ACTION_TYPES.setWeather:
      return {
        ...state,
        error: null,
        weather: action.payload as WeatherModel,
      };
    default:
      return state;
  }
}
