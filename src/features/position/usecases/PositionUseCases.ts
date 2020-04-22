import { ApplicationError } from 'errors/ApplicationError';
import { PositionEntity } from '../entities';
import { PositionRepository } from './contracts';

export class PositionUseCases {
  constructor(private readonly repository: PositionRepository) {}

  getPosition(): Promise<PositionEntity | ApplicationError> {
    return this.repository.getPosition();
  }

  validatePosition(
    position: PositionEntity
  ): PositionEntity | ApplicationError {
    return this.repository.validatePosition(position);
  }
}
