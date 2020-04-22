import { OpenWeather } from './OpenWeather';

const API_KEY = 'ac05c2db239c8c0a196330ddd81febe9';

export function makeOpenWeatherInstance(key: string = API_KEY) {
  return new OpenWeather(key);
}
export { OpenWeather } from './OpenWeather';
export { WeatherResponse } from './types';
