import { TemperatureEntity } from './TemperatureEntity';

export class WeatherEntity {
  public readonly description: string;
  public readonly name: string;
  public readonly place?: string | null;
  public readonly temperature: TemperatureEntity;

  constructor(data: {
    description: string;
    name: string;
    place?: string | null;
    temperature: TemperatureEntity;
  }) {
    this.description = data.description;
    this.name = data.name;
    this.place = data.place ?? null;
    this.temperature = data.temperature;
  }
}
