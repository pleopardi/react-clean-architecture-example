import { ApplicationError } from 'errors/ApplicationError';
import { dispatch } from '../../store';
import { positionUseCases } from 'features/position';
import { setError, setIsLoading, setPosition } from '../actions';

export function handleGetPosition(): void {
  dispatch(setIsLoading(true));

  positionUseCases
    .getPosition()
    .then((result) => {
      if (result instanceof ApplicationError) {
        dispatch(setError(result));

        return;
      }

      dispatch(
        setPosition({
          latitude: result.latitude.toString(),
          longitude: result.longitude.toString(),
        })
      );
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
}
