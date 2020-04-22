import { ApplicationError } from 'errors/ApplicationError';
import { PositionEntity } from '../../entities';

export interface PositionRepository {
  getPosition(): Promise<PositionEntity | ApplicationError>;
  validatePosition(position: PositionEntity): PositionEntity | ApplicationError;
}
