import { TemperatureModel } from '../models';
import { WeatherEntity } from '../entities';
import { WeatherResponse } from 'modules/OpenWeather';

export class WeatherModel extends WeatherEntity {
  static fromOpenWeather(response: WeatherResponse): WeatherModel {
    return new WeatherModel({
      description: response.weather[0].description,
      name: response.weather[0].main,
      place: response.name,
      temperature: new TemperatureModel({
        current: response.main.temp,
        max: response.main.temp_max,
        min: response.main.temp_min,
      }),
    });
  }
}
