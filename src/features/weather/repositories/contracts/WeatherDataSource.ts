import { ApplicationError } from 'errors/ApplicationError';
import { WeatherModel } from '../../models';

export interface WeatherDataSource {
  getWeather(
    latitude: number,
    longitude: number
  ): Promise<WeatherModel | ApplicationError>;
}
