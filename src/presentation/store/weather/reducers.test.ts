import { ACTION_TYPES } from './actions';
import { ApplicationError } from '../../../errors/ApplicationError';
import { initialState } from './state';
import { reducer } from './reducers';

describe('#presentation #store #weather #reducers', () => {
  const mockApplicationError = new ApplicationError(
    new Error('Position error')
  );

  const mockWeather = {
    description: 'light rain',
    name: 'Rain',
    place: 'Montegranaro',
    temperature: {
      current: 11.22,
      min: 11.67,
      max: 11.11,
    },
  };

  describe('#setError', () => {
    it('should set error', () => {
      const initialState = {
        error: null,
        isLoading: false,
        weather: mockWeather,
      };

      const action = {
        type: ACTION_TYPES.setError,
        payload: mockApplicationError,
      };

      const expectedState = {
        ...initialState,
        error: mockApplicationError,
        weather: null,
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });
  });

  describe('#setIsLoading', () => {
    it('should set isLoading', () => {
      const isLoading = true;

      const action = {
        type: ACTION_TYPES.setIsLoading,
        payload: isLoading,
      };

      const expectedState = {
        ...initialState,
        isLoading,
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });
  });

  describe('#setWeather', () => {
    it('should set weather', () => {
      const initialState = {
        error: mockApplicationError,
        isLoading: false,
        weather: null,
      };

      const action = {
        type: ACTION_TYPES.setWeather,
        payload: mockWeather,
      };

      const expectedState = {
        ...initialState,
        error: null,
        weather: mockWeather,
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });
  });
});
