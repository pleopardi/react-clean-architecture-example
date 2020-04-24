import { PositionDataSourceImpl } from './datasources';
import { PositionRepositoryImpl } from './repositories';
import { PositionUseCases } from './usecases';

export const positionUseCases = new PositionUseCases(
  new PositionRepositoryImpl(new PositionDataSourceImpl())
);
export * from './errors';
export * from './models';
