import { OpenWeather } from './OpenWeather';

export function makeOpenWeatherInstance() {
  return new OpenWeather(process.env.OPEN_WEATHER_API_KEY ?? '');
}
export { OpenWeather } from './OpenWeather';
export { WeatherResponse } from './types';
