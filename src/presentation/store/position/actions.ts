import { ApplicationError } from 'errors/ApplicationError';
import { Coords } from './state';

export const ACTION_TYPES = {
  setError: 'position/setError',
  setIsLoading: 'position/setIsLoading',
  setIsValid: 'position/setIsValid',
  setLatitude: 'position/setLatitude',
  setLongitude: 'position/setLongitude',
  setPosition: 'position/setPosition',
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

export interface SetIsValidAction {
  type: typeof ACTION_TYPES.setIsValid;
  payload: boolean;
}

export function setIsValid(isValid: boolean): SetIsValidAction {
  return { type: ACTION_TYPES.setIsValid, payload: isValid };
}

export interface SetLatitudeAction {
  type: typeof ACTION_TYPES.setLatitude;
  payload: string;
}

export function setLatitude(latitude: string): SetLatitudeAction {
  return { type: ACTION_TYPES.setLatitude, payload: latitude };
}

export interface SetLongitudeAction {
  type: typeof ACTION_TYPES.setLongitude;
  payload: string;
}

export function setLongitude(longitude: string): SetLongitudeAction {
  return { type: ACTION_TYPES.setLongitude, payload: longitude };
}

export interface SetPositionAction {
  type: typeof ACTION_TYPES.setError;
  payload: Coords;
}

export function setPosition(position: Coords): SetPositionAction {
  return { type: ACTION_TYPES.setPosition, payload: position };
}

export type PositionAction =
  | SetErrorAction
  | SetIsLoadingAction
  | SetIsValidAction
  | SetLatitudeAction
  | SetLongitudeAction
  | SetPositionAction;
