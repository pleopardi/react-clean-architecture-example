import { ApplicationError } from 'errors/ApplicationError';
import { WeatherDataSource } from './contracts';
import { WeatherModel } from '../models';
import { WeatherRepository } from '../usecases';

export class WeatherRepositoryImpl implements WeatherRepository {
  constructor(private readonly dataSource: WeatherDataSource) {}

  getWeather(
    latitude: number,
    longitude: number
  ): Promise<WeatherModel | ApplicationError> {
    return this.dataSource.getWeather(latitude, longitude);
  }
}
