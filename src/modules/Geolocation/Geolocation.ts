export class Geolocation {
  public getPosition(): Promise<Position | Error> {
    if (!this.isAvailable) {
      return Promise.resolve(
        new Error('Geolocation is not available in your browser')
      );
    }

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => resolve(new Error(error.message))
      );
    });
  }

  private get isAvailable(): boolean {
    return 'geolocation' in navigator;
  }
}
