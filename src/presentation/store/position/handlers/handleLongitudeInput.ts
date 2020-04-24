import { dispatch } from '../../store';
import { setLongitude } from '../actions';

export function handleLongitudeInput(longitude: string): void {
  dispatch(setLongitude(longitude));
}
