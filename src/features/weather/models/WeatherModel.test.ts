/* eslint @typescript-eslint/camelcase: 'off' */
import { TemperatureModel } from './TemperatureModel';
import { WeatherModel } from './WeatherModel';
import { WeatherResponse } from 'modules/OpenWeather';

describe('#features #weather #models #WeatherModel', () => {
  describe('#static fromOpenWeather', () => {
    it('should return a WeatherModel', () => {
      const mockWeatherResponse: WeatherResponse = {
        main: {
          temp: 11.22,
          temp_max: 11.67,
          temp_min: 11.11,
        },
        name: 'Montegranaro',
        weather: [
          {
            description: 'light rain',
            main: 'Rain',
          },
        ],
      };

      const expectedResult = new WeatherModel({
        description: 'light rain',
        name: 'Rain',
        place: 'Montegranaro',
        temperature: new TemperatureModel({
          current: 11.22,
          max: 11.67,
          min: 11.11,
        }),
      });

      expect(WeatherModel.fromOpenWeather(mockWeatherResponse)).toEqual(
        expectedResult
      );
    });
  });
});
