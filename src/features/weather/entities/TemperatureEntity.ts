export class TemperatureEntity {
  public readonly current: number;
  public readonly max: number;
  public readonly min: number;

  constructor(data: { current: number; max: number; min: number }) {
    this.current = data.current;
    this.max = data.max;
    this.min = data.min;
  }
}
