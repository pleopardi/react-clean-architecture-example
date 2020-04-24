import { makeOpenWeatherInstance, OpenWeather } from 'modules/OpenWeather';
import { FetchWeatherError } from '../errors';
import { WeatherModel } from '../models';
import { WeatherDataSource } from '../repositories';

export class WeatherDataSourceImpl implements WeatherDataSource {
  private readonly openWeatherInstance: OpenWeather;

  constructor() {
    this.openWeatherInstance = makeOpenWeatherInstance();
  }

  getWeather(
    latitude: number,
    longitude: number
  ): Promise<WeatherModel | FetchWeatherError> {
    return this.openWeatherInstance
      .getWeather(latitude, longitude)
      .then((result) => {
        if (result instanceof Error) {
          return new FetchWeatherError(result);
        }

        return WeatherModel.fromOpenWeather(result);
      });
  }
}
