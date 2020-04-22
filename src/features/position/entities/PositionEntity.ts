export class PositionEntity {
  constructor(
    public readonly latitude: number,
    public readonly longitude: number
  ) {}

  public get isValid(): boolean {
    return this.isLatitudeValid && this.isLongitudeValid;
  }

  private get isLatitudeValid(): boolean {
    return this.latitude >= -90 && this.latitude <= 90;
  }

  private get isLongitudeValid(): boolean {
    return this.longitude >= -180 && this.longitude <= 80;
  }
}
