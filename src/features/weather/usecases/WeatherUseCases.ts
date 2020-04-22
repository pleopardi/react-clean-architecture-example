import { ApplicationError } from 'errors/ApplicationError';
import { WeatherEntity } from '../entities';
import { WeatherRepository } from './contracts';

export class WeatherUseCases {
  constructor(private readonly repository: WeatherRepository) {}

  getWeather(
    latitude: number,
    longitude: number
  ): Promise<WeatherEntity | ApplicationError> {
    return this.repository.getWeather(latitude, longitude);
  }
}
