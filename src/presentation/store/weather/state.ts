import { ApplicationError } from 'errors/ApplicationError';
import { WeatherModel } from 'features/weather';

export interface WeatherState {
  error: ApplicationError | null;
  isLoading: boolean;
  weather: WeatherModel | null;
}

export const initialState = {
  error: null,
  isLoading: false,
  weather: null,
};
