import { WeatherDataSourceImpl } from './datasources';
import { WeatherRepositoryImpl } from './repositories';
import { WeatherUseCases } from './usecases';

export const weatherUseCases = new WeatherUseCases(
  new WeatherRepositoryImpl(new WeatherDataSourceImpl())
);
export * from './errors';
export * from './models';
