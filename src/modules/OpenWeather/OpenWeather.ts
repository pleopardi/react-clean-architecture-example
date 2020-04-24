import { WeatherResponse } from './types';

export class OpenWeather {
  constructor(private readonly key: string) {}

  getWeather(
    latitude: number,
    longitude: number
  ): Promise<WeatherResponse | Error> {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.key}&units=metric`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.cod !== 200) {
          throw new Error(response.message);
        }

        return response;
      })
      .catch((error) => error);
  }
}
