import { ApplicationError } from '../../../errors/ApplicationError';
import { PositionEntity } from '../entities';
import { PositionUseCases } from './PositionUseCases';

describe('#features #position #usecases #PositionUseCases', () => {
  const mockApplicationError = new ApplicationError(
    new Error('getPosition error')
  );
  const mockPosition = new PositionEntity(1, 1);

  describe('#getPosition', () => {
    it('should return a Promise<PositionEntity>', async () => {
      const mockPositionRepository = {
        getPosition() {
          return Promise.resolve(mockPosition);
        },
        validatePosition() {
          return mockPosition;
        },
      };

      const positionUseCases = new PositionUseCases(mockPositionRepository);

      const result = await positionUseCases.getPosition();

      expect(result).toBeInstanceOf(PositionEntity);
      expect(result).toBe(mockPosition);
    });

    it('should return a Promise<ApplicationError>', async () => {
      const mockPositionRepository = {
        getPosition() {
          return Promise.resolve(mockApplicationError);
        },
        validatePosition() {
          return mockPosition;
        },
      };

      const positionUseCases = new PositionUseCases(mockPositionRepository);

      const result = await positionUseCases.getPosition();

      expect(result).toBeInstanceOf(ApplicationError);
      expect(result).toBe(mockApplicationError);
    });
  });

  describe('#validatePosition', () => {
    it('should return a PositionEntity', () => {
      const mockPositionRepository = {
        getPosition() {
          return Promise.resolve(mockPosition);
        },
        validatePosition() {
          return mockPosition;
        },
      };

      const positionUseCases = new PositionUseCases(mockPositionRepository);

      const result = positionUseCases.validatePosition(mockPosition);

      expect(result).toBeInstanceOf(PositionEntity);
      expect(result).toBe(mockPosition);
    });

    it('should return an ApplicationError', () => {
      const mockPositionRepository = {
        getPosition() {
          return Promise.resolve(mockPosition);
        },
        validatePosition() {
          return mockApplicationError;
        },
      };

      const positionUseCases = new PositionUseCases(mockPositionRepository);

      const result = positionUseCases.validatePosition(mockPosition);

      expect(result).toBeInstanceOf(ApplicationError);
      expect(result).toBe(mockApplicationError);
    });
  });
});
