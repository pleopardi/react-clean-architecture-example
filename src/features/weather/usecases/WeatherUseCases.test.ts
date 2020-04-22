import { ApplicationError } from '../../../errors/ApplicationError';
import { TemperatureEntity, WeatherEntity } from '../entities';
import { WeatherUseCases } from './WeatherUseCases';

describe('#features #weather #usecases #WeatherUseCases', () => {
  const mockApplicationError = new ApplicationError(
    new Error('getWeather error')
  );
  const mockLatitude = 10;
  const mockLongitude = 20;
  const mockWeather = new WeatherEntity({
    description: 'light rain',
    name: 'Rain',
    place: 'Montegranaro',
    temperature: new TemperatureEntity({
      current: 11.22,
      max: 11.67,
      min: 11.11,
    }),
  });

  describe('#getWeather', () => {
    it('should return a Promise<WeatherEntity>', async () => {
      const mockWeatherRepository = {
        getWeather() {
          return Promise.resolve(mockWeather);
        },
      };

      const weatherUseCases = new WeatherUseCases(mockWeatherRepository);

      const result = await weatherUseCases.getWeather(
        mockLatitude,
        mockLongitude
      );

      expect(result).toBeInstanceOf(WeatherEntity);
      expect(result).toBe(mockWeather);
    });

    it('should return a Promise<ApplicationError>', async () => {
      const mockWeatherRepository = {
        getWeather() {
          return Promise.resolve(mockApplicationError);
        },
      };

      const weatherUseCases = new WeatherUseCases(mockWeatherRepository);

      const result = await weatherUseCases.getWeather(
        mockLatitude,
        mockLongitude
      );

      expect(result).toBeInstanceOf(ApplicationError);
      expect(result).toBe(mockApplicationError);
    });
  });
});
