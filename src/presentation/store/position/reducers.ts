import { PositionAction, ACTION_TYPES } from './actions';
import { ApplicationError } from '../../../errors/ApplicationError';
import { Coords, initialState, PositionState } from './state';
import { positionUseCases, PositionModel } from '../../../features/position';
import { stringToFloat } from '../../../utilities/stringToFloat';

export function setCoordinateReducer(
  state: PositionState,
  latitude: string,
  longitude: string
) {
  const floatLatitude = stringToFloat(latitude);
  const floatLongitude = stringToFloat(longitude);

  if (floatLatitude instanceof Error || floatLongitude instanceof Error) {
    return {
      ...state,
      error: null,
      isValid: false,
      position: { latitude, longitude },
    };
  }

  if (
    positionUseCases.validatePosition(
      new PositionModel(floatLatitude, floatLongitude)
    ) instanceof ApplicationError
  ) {
    return {
      ...state,
      error: null,
      isValid: false,
      position: { latitude, longitude },
    };
  }

  return {
    ...state,
    error: null,
    isValid: true,
    position: { latitude, longitude },
  };
}

export function reducer(
  state: PositionState = initialState,
  action: PositionAction
): PositionState {
  switch (action.type) {
    case ACTION_TYPES.setError:
      return {
        ...state,
        error: action.payload as ApplicationError,
        isValid: false,
        position: { latitude: '', longitude: '' },
      };
    case ACTION_TYPES.setIsLoading:
      return {
        ...state,
        isLoading: action.payload as boolean,
      };
    case ACTION_TYPES.setIsValid:
      return {
        ...state,
        isValid: action.payload as boolean,
      };
    case ACTION_TYPES.setLatitude:
      return setCoordinateReducer(
        state,
        action.payload as string,
        state.position.longitude
      );
    case ACTION_TYPES.setLongitude:
      return setCoordinateReducer(
        state,
        state.position.latitude,
        action.payload as string
      );
    case ACTION_TYPES.setPosition:
      return {
        ...state,
        error: null,
        isValid: true,
        position: action.payload as Coords,
      };
    default:
      return state;
  }
}
