import { ApplicationError } from 'errors/ApplicationError';
import { InvalidPositionError } from '../errors';
import { PositionDataSource } from './contracts';
import { PositionModel } from '../models';
import { PositionRepository } from '../usecases';

export class PositionRepositoryImpl implements PositionRepository {
  constructor(private readonly dataSource: PositionDataSource) {}

  getPosition(): Promise<PositionModel | ApplicationError> {
    return this.dataSource.getPosition();
  }

  validatePosition(
    position: PositionModel
  ): PositionModel | InvalidPositionError {
    if (position.isValid) {
      return position;
    }

    return new InvalidPositionError(
      new Error(
        `Position (${position.latitude},${position.longitude}) is not valid`
      )
    );
  }
}
