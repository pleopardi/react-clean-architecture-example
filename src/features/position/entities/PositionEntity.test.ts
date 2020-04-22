import { PositionEntity } from './PositionEntity';

describe('#features #position #entities #PositionEntity', () => {
  describe('#isValid', () => {
    it('should return true', () => {
      expect(new PositionEntity(43.233219, 13.6322).isValid).toBe(true);
      expect(new PositionEntity(40.661, -73.944).isValid).toBe(true);
    });

    it('should return false', () => {
      expect(new PositionEntity(-92, 13.6322).isValid).toBe(false);
      expect(new PositionEntity(92, 13.6322).isValid).toBe(false);
      expect(new PositionEntity(43.233219, -185).isValid).toBe(false);
      expect(new PositionEntity(43.233219, 83).isValid).toBe(false);
    });
  });
});
