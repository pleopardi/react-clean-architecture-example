import { ApplicationError } from '../../../errors/ApplicationError';
import { TemperatureModel, WeatherModel } from '../models';
import { WeatherRepositoryImpl } from './WeatherRepositoryImpl';

describe('#features #weather #repositories #WeatherRepository', () => {
  const mockApplicationError = new ApplicationError(
    new Error('getWeather error')
  );
  const mockLatitude = 10;
  const mockLongitude = 20;
  const mockWeather = new WeatherModel({
    description: 'light rain',
    name: 'Rain',
    place: 'Montegranaro',
    temperature: new TemperatureModel({
      current: 11.22,
      max: 11.67,
      min: 11.11,
    }),
  });

  describe('#getWeather', () => {
    it('should return a Promise<WeatherModel>', async () => {
      const mockWeatherDataSource = {
        getWeather() {
          return Promise.resolve(mockWeather);
        },
      };

      const weatherRepository = new WeatherRepositoryImpl(
        mockWeatherDataSource
      );

      const result = await weatherRepository.getWeather(
        mockLatitude,
        mockLongitude
      );

      expect(result).toBeInstanceOf(WeatherModel);
      expect(result).toBe(mockWeather);
    });

    it('should return a Promise<ApplicationError>', async () => {
      const mockWeatherDataSource = {
        getWeather() {
          return Promise.resolve(mockApplicationError);
        },
      };

      const weatherRepository = new WeatherRepositoryImpl(
        mockWeatherDataSource
      );

      const result = await weatherRepository.getWeather(
        mockLatitude,
        mockLongitude
      );

      expect(result).toBeInstanceOf(ApplicationError);
      expect(result).toBe(mockApplicationError);
    });
  });
});
