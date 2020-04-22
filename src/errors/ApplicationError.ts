export class ApplicationError {
  constructor(public readonly error: Error) {}

  get name(): string {
    return this.constructor.name;
  }
}
