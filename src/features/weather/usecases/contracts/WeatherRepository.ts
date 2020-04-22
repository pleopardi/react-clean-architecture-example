import { ApplicationError } from 'errors/ApplicationError';
import { WeatherEntity } from '../../entities';

export interface WeatherRepository {
  getWeather(
    latitude: number,
    longitude: number
  ): Promise<WeatherEntity | ApplicationError>;
}
