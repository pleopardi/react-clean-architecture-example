import { dispatch } from '../../store';
import { setLatitude } from '../actions';

export function handleLatitudeInput(latitude: string): void {
  dispatch(setLatitude(latitude));
}
