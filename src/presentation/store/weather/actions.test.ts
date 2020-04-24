import { ACTION_TYPES, setError, setIsLoading, setWeather } from './actions';
import { ApplicationError } from '../../../errors/ApplicationError';

describe('#presentation #store #weather #actions', () => {
  it('setError should return a SetErrorAction', () => {
    const applicationError = new ApplicationError(new Error('Weather error'));

    expect(setError(applicationError)).toStrictEqual({
      type: ACTION_TYPES.setError,
      payload: applicationError,
    });
  });

  it('setIsLoading should return a SetIsLoadingAction', () => {
    const isLoading = true;

    expect(setIsLoading(isLoading)).toStrictEqual({
      type: ACTION_TYPES.setIsLoading,
      payload: isLoading,
    });
  });

  it('setWeather should return a SetWeatherAction', () => {
    const weather = {
      description: 'light rain',
      name: 'Rain',
      place: 'Montegranaro',
      temperature: {
        current: 11.22,
        min: 11.67,
        max: 11.11,
      },
    };

    expect(setWeather(weather)).toStrictEqual({
      type: ACTION_TYPES.setWeather,
      payload: weather,
    });
  });
});
