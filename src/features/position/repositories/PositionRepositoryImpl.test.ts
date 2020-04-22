import { ApplicationError } from '../../../errors/ApplicationError';
import { InvalidPositionError } from '../errors';
import { PositionModel } from '../models';
import { PositionRepositoryImpl } from './PositionRepositoryImpl';

describe('#features #position #repositories #PositionRepositoryImpl', () => {
  const mockApplicationError = new ApplicationError(
    new Error('getPosition error')
  );
  const mockInvalidPosition = new PositionModel(95, 1);
  const mockPosition = new PositionModel(1, 1);

  describe('#getPosition', () => {
    it('should return a Promise<Position>', async () => {
      const mockPositionDataSource = {
        getPosition() {
          return Promise.resolve(mockPosition);
        },
      };

      const positionRepository = new PositionRepositoryImpl(
        mockPositionDataSource
      );

      const result = await positionRepository.getPosition();

      expect(result).toBeInstanceOf(PositionModel);
      expect(result).toBe(mockPosition);
    });

    it('should return a Promise<ApplicationError>', async () => {
      const mockPositionDataSource = {
        getPosition() {
          return Promise.resolve(mockApplicationError);
        },
      };

      const positionRepository = new PositionRepositoryImpl(
        mockPositionDataSource
      );

      const result = await positionRepository.getPosition();

      expect(result).toBeInstanceOf(ApplicationError);
      expect(result).toBe(mockApplicationError);
    });
  });

  describe('#validatePosition', () => {
    it('should return a Position', () => {
      const mockPositionRepository = {
        getPosition() {
          return Promise.resolve(mockPosition);
        },
      };

      const positionRepository = new PositionRepositoryImpl(
        mockPositionRepository
      );

      const result = positionRepository.validatePosition(mockPosition);

      expect(result).toBeInstanceOf(PositionModel);
      expect(result).toBe(mockPosition);
    });

    it('should return an InvalidPositionError', () => {
      const mockPositionRepository = {
        getPosition() {
          return Promise.resolve(mockPosition);
        },
      };

      const positionRepository = new PositionRepositoryImpl(
        mockPositionRepository
      );

      const result = positionRepository.validatePosition(mockInvalidPosition);

      expect(result).toBeInstanceOf(InvalidPositionError);
    });
  });
});
