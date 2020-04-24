import { ApplicationError } from 'errors/ApplicationError';
import { PositionModel } from '../../models';

export interface PositionDataSource {
  getPosition(): Promise<PositionModel | ApplicationError>;
}
