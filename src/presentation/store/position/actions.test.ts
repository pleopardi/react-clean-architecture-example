import {
  ACTION_TYPES,
  setError,
  setLatitude,
  setIsLoading,
  setLongitude,
  setPosition,
  setIsValid,
} from './actions';
import { ApplicationError } from '../../../errors/ApplicationError';

describe('#presentation #store #position #actions', () => {
  it('setError should return a SetErrorAction', () => {
    const applicationError = new ApplicationError(new Error('Position error'));

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

  it('setIsValid should return a SetIsValidAction', () => {
    const isValid = true;

    expect(setIsValid(isValid)).toStrictEqual({
      type: ACTION_TYPES.setIsValid,
      payload: isValid,
    });
  });

  it('setLatitude should return a SetLatitudeAction', () => {
    const latitude = '10';

    expect(setLatitude(latitude)).toStrictEqual({
      type: ACTION_TYPES.setLatitude,
      payload: latitude,
    });
  });

  it('setLongitude should return a SetLongitudeAction', () => {
    const longitude = '10';

    expect(setLongitude(longitude)).toStrictEqual({
      type: ACTION_TYPES.setLongitude,
      payload: longitude,
    });
  });

  it('setPosition should return a SetPositionAction', () => {
    const position = {
      latitude: '10',
      longitude: '10',
    };

    expect(setPosition(position)).toStrictEqual({
      type: ACTION_TYPES.setPosition,
      payload: position,
    });
  });
});
