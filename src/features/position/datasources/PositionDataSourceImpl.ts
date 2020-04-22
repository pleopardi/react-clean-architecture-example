import { Geolocation } from '../../../modules/Geolocation';
import { GeolocationError } from '../errors';
import { PositionDataSource } from '../repositories';
import { PositionModel } from '../models';

export class PositionDataSourceImpl implements PositionDataSource {
  getPosition(): Promise<PositionModel | GeolocationError> {
    return new Geolocation().getPosition().then((result) => {
      if (result instanceof Error) {
        return new GeolocationError(result);
      }

      return PositionModel.fromGeolocation(result);
    });
  }
}
