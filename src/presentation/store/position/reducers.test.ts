import { ACTION_TYPES } from './actions';
import { ApplicationError } from '../../../errors/ApplicationError';
import { initialState } from './state';
import { reducer } from './reducers';

describe('#presentation #store #position #reducers', () => {
  describe('#setError', () => {
    it('should set error', () => {
      const initialState = {
        error: null,
        isLoading: false,
        isValid: true,
        position: {
          latitude: '10',
          longitude: '20',
        },
      };

      const error = new ApplicationError(new Error('Position error'));

      const action = {
        type: ACTION_TYPES.setError,
        payload: error,
      };

      const expectedState = {
        ...initialState,
        isValid: false,
        error,
        position: {
          latitude: '',
          longitude: '',
        },
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });
  });

  describe('#setIsLoading', () => {
    it('should set isLoading', () => {
      const isLoading = true;

      const action = {
        type: ACTION_TYPES.setIsLoading,
        payload: isLoading,
      };

      const expectedState = {
        ...initialState,
        isLoading,
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });
  });

  describe('#setIsValid', () => {
    it('should set isValid', () => {
      const isValid = true;

      const action = {
        type: ACTION_TYPES.setIsValid,
        payload: isValid,
      };

      const expectedState = {
        ...initialState,
        isValid,
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });
  });

  describe('#setLatitude', () => {
    it('latitude is not a number', () => {
      const initialState = {
        error: null,
        isLoading: false,
        isValid: true,
        position: {
          latitude: '10',
          longitude: '10',
        },
      };

      const latitude = 'Paolo';

      const action = {
        type: ACTION_TYPES.setLatitude,
        payload: latitude,
      };

      const expectedState = {
        ...initialState,
        isValid: false,
        position: {
          ...initialState.position,
          latitude,
        },
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });

    it('longitude is not a number', () => {
      const initialState = {
        error: null,
        isLoading: false,
        isValid: true,
        position: {
          latitude: '10',
          longitude: 'Paolo',
        },
      };

      const latitude = '20';

      const action = {
        type: ACTION_TYPES.setLatitude,
        payload: latitude,
      };

      const expectedState = {
        ...initialState,
        isValid: false,
        position: {
          ...initialState.position,
          latitude,
        },
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });

    it('latitude is not valid', () => {
      const initialState = {
        error: null,
        isLoading: false,
        isValid: true,
        position: {
          latitude: '10',
          longitude: '10',
        },
      };

      const latitude = '200';

      const action = {
        type: ACTION_TYPES.setLatitude,
        payload: latitude,
      };

      const expectedState = {
        ...initialState,
        isValid: false,
        position: {
          ...initialState.position,
          latitude,
        },
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });

    it('longitude is not valid', () => {
      const initialState = {
        error: null,
        isLoading: false,
        isValid: true,
        position: {
          latitude: '10',
          longitude: '200',
        },
      };

      const latitude = '20';

      const action = {
        type: ACTION_TYPES.setLatitude,
        payload: latitude,
      };

      const expectedState = {
        ...initialState,
        isValid: false,
        position: {
          ...initialState.position,
          latitude,
        },
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });

    it('latitude and longitude are both valid', () => {
      const initialState = {
        error: null,
        isLoading: false,
        isValid: false,
        position: {
          latitude: '10',
          longitude: '10',
        },
      };

      const latitude = '20';

      const action = {
        type: ACTION_TYPES.setLatitude,
        payload: latitude,
      };

      const expectedState = {
        ...initialState,
        isValid: true,
        position: {
          ...initialState.position,
          latitude,
        },
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });
  });

  describe('#setLongitude', () => {
    it('latitude is not a number', () => {
      const initialState = {
        error: null,
        isLoading: false,
        isValid: true,
        position: {
          latitude: 'Paolo',
          longitude: '10',
        },
      };

      const longitude = '20';

      const action = {
        type: ACTION_TYPES.setLongitude,
        payload: longitude,
      };

      const expectedState = {
        ...initialState,
        isValid: false,
        position: {
          ...initialState.position,
          longitude,
        },
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });

    it('longitude is not a number', () => {
      const initialState = {
        error: null,
        isLoading: false,
        isValid: true,
        position: {
          latitude: '10',
          longitude: '20',
        },
      };

      const longitude = 'Paolo';

      const action = {
        type: ACTION_TYPES.setLongitude,
        payload: longitude,
      };

      const expectedState = {
        ...initialState,
        isValid: false,
        position: {
          ...initialState.position,
          longitude,
        },
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });

    it('latitude is not valid', () => {
      const initialState = {
        error: null,
        isLoading: false,
        isValid: true,
        position: {
          latitude: '200',
          longitude: '10',
        },
      };

      const longitude = '20';

      const action = {
        type: ACTION_TYPES.setLongitude,
        payload: longitude,
      };

      const expectedState = {
        ...initialState,
        isValid: false,
        position: {
          ...initialState.position,
          longitude,
        },
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });

    it('longitude is not valid', () => {
      const initialState = {
        error: null,
        isLoading: false,
        isValid: true,
        position: {
          latitude: '10',
          longitude: '20',
        },
      };

      const longitude = '200';

      const action = {
        type: ACTION_TYPES.setLongitude,
        payload: longitude,
      };

      const expectedState = {
        ...initialState,
        isValid: false,
        position: {
          ...initialState.position,
          longitude,
        },
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });

    it('latitude and longitude are both valid', () => {
      const initialState = {
        error: null,
        isLoading: false,
        isValid: false,
        position: {
          latitude: '10',
          longitude: '10',
        },
      };

      const longitude = '20';

      const action = {
        type: ACTION_TYPES.setLongitude,
        payload: longitude,
      };

      const expectedState = {
        ...initialState,
        isValid: true,
        position: {
          ...initialState.position,
          longitude,
        },
      };

      expect(reducer(initialState, action)).toStrictEqual(expectedState);
    });
  });

  it('should update position', () => {
    const position = {
      latitude: '10',
      longitude: '10',
    };

    const action = {
      type: ACTION_TYPES.setPosition,
      payload: position,
    };

    const expectedState = {
      ...initialState,
      isValid: true,
      position,
    };

    expect(reducer(initialState, action)).toStrictEqual(expectedState);
  });
});
