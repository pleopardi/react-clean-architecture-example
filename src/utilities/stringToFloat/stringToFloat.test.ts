import { stringToFloat } from './stringToFloat';

describe('#utilities #stringToFloat', () => {
  it('should return a float number', () => {
    expect(stringToFloat('10')).toBe(10.0);
    expect(stringToFloat('10.11')).toBe(10.11);
  });

  it('should return an error', () => {
    expect(stringToFloat('Paolo')).toBeInstanceOf(Error);
  });
});
