import { ApplicationError } from 'errors/ApplicationError';
import { WeatherModel } from 'features/weather';

export const ACTION_TYPES = {
  setError: 'weather/setError',
  setIsLoading: 'weather/setIsLoading',
  setWeather: 'weather/setWeather',
};

export interface SetErrorAction {
  type: typeof ACTION_TYPES.setError;
  payload: ApplicationError;
}

export function setError(error: ApplicationError): SetErrorAction {
  return { type: ACTION_TYPES.setError, payload: error };
}

export interface SetIsLoadingAction {
  type: typeof ACTION_TYPES.setIsLoading;
  payload: boolean;
}

export function setIsLoading(isLoading: boolean): SetIsLoadingAction {
  return { type: ACTION_TYPES.setIsLoading, payload: isLoading };
}

export interface SetWeatherAction {
  type: typeof ACTION_TYPES.setWeather;
  payload: WeatherModel;
}

export function setWeather(weather: WeatherModel): SetWeatherAction {
  return { type: ACTION_TYPES.setWeather, payload: weather };
}

export type WeatherAction =
  | SetErrorAction
  | SetIsLoadingAction
  | SetWeatherAction;
