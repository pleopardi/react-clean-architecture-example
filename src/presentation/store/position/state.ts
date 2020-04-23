import { ApplicationError } from 'errors/ApplicationError';

export interface Coords {
  latitude: string;
  longitude: string;
}

export interface PositionState {
  error: ApplicationError | null;
  isLoading: boolean;
  isValid: boolean;
  position: Coords;
}

export const initialState: PositionState = {
  error: null,
  isLoading: false,
  isValid: false,
  position: {
    latitude: '',
    longitude: '',
  },
};
