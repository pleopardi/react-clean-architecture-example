import { PositionEntity } from '../entities';

export class PositionModel extends PositionEntity {
  static fromGeolocation(geolocationPosition: Position): PositionModel {
    return new PositionModel(
      geolocationPosition.coords.latitude,
      geolocationPosition.coords.longitude
    );
  }

  static fromUser(latitude: number, longitude: number): PositionModel {
    return new PositionModel(latitude, longitude);
  }
}
