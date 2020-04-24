import { ApplicationError } from 'errors/ApplicationError';
import { dispatch } from '../../store';
import { setError, setIsLoading, setWeather } from '../actions';
import { stringToFloat } from 'utilities/stringToFloat';
import { weatherUseCases } from 'features/weather';

export function handleFetchWeather(latitude: string, longitude: string): void {
  dispatch(setIsLoading(true));

  weatherUseCases
    .getWeather(
      stringToFloat(latitude) as number,
      stringToFloat(longitude) as number
    )
    .then((result) => {
      if (result instanceof ApplicationError) {
        dispatch(setError(result));

        return;
      }

      dispatch(setWeather(result));
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
}
