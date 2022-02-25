import reducer from '../reducers';
import { Action } from '../reducers/constants';

const initialState = {
  isPlaced: false,
  coordinate: null,
  facing: { x: 0, y: 1 },
  rotateDeg: 0,
  commands: [],
  errorMessage: '',
};

describe('Test reducer', () => {
  it('1.should return the initial state', () => {
    const payload = {
      command: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.ADD_COMMAND,
        payload,
      }).reducer,
    ).toEqual(initialState);
  });

  it('2.should handle add_command with PLACE command', () => {
    const payload = {
      command: 'PLACE,0,0,NORTH',
    };

    const expectedState = {
      isPlaced: true,
      coordinate: { x: 0, y: 0 },
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: ['PLACE (0, 0, \'NORTH\')'],
      errorMessage: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.ADD_COMMAND,
        payload,
      }).reducer,
    ).toEqual(expectedState);
  });

  it('3.should handle reset', () => {
    const payload = {
      command: 'PLACE,0,0,NORTH',
    };

    const expectedState = {
      isPlaced: false,
      coordinate: null,
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: [],
      errorMessage: '',
    };

    const initialState = {
      isPlaced: true,
      coordinate: { x: 0, y: 0 },
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: ['PLACE (0, 0, \'NORTH\')'],
      errorMessage: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.RESET,
        payload,
      }).reducer,
    ).toEqual(expectedState);
  });

  it('4.should handle showError', () => {
    const payload = {
      message: 'error message',
    };

    const expectedState = {
      isPlaced: false,
      coordinate: null,
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: [],
      errorMessage: 'error message',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.ADD_ERROR,
        payload,
      }).reducer,
    ).toEqual(expectedState);
  });

  it('5.should handle clearErrorMessage', () => {
    const initialState = {
      isPlaced: false,
      coordinate: null,
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: [],
      errorMessage: 'error message',
    };

    const expectedState = {
      isPlaced: false,
      coordinate: null,
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: [],
      errorMessage: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.CLEAR_ERROR_MESSAGE,
      }).reducer,
    ).toEqual(expectedState);
  });

  it('6.should handle add_command with MOVE command', () => {
    const payload = {
      command: 'MOVE',
    };

    const initialState = {
      isPlaced: true,
      coordinate: { x: 0, y: 0 },
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: [],
      errorMessage: '',
    };

    const expectedState = {
      isPlaced: true,
      coordinate: { x: 0, y: 1 },
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: ['MOVE( )'],
      errorMessage: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.ADD_COMMAND,
        payload,
      }).reducer,
    ).toEqual(expectedState);
  });

  it('7.should handle add_command with LEFT command', () => {
    const payload = {
      command: 'LEFT',
    };

    const initialState = {
      isPlaced: true,
      coordinate: { x: 1, y: 1 },
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: [],
      errorMessage: '',
    };

    const expectedState = {
      isPlaced: true,
      coordinate: { x: 1, y: 1 },
      facing: { x: -1, y: 0 },
      rotateDeg: -90,
      commands: ['LEFT( )'],
      errorMessage: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.ADD_COMMAND,
        payload,
      }).reducer,
    ).toEqual(expectedState);
  });

  it('8.should handle add_command with RIGHT command', () => {
    const payload = {
      command: 'RIGHT',
    };

    const initialState = {
      isPlaced: true,
      coordinate: { x: 1, y: 1 },
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: [],
      errorMessage: '',
    };

    const expectedState = {
      isPlaced: true,
      coordinate: { x: 1, y: 1 },
      facing: { x: 1, y: 0 },
      rotateDeg: 90,
      commands: ['RIGHT( )'],
      errorMessage: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.ADD_COMMAND,
        payload,
      }).reducer,
    ).toEqual(expectedState);
  });

  it('9.should handle add_command with REPORT command', () => {
    const payload = {
      command: 'REPORT',
    };

    const initialState = {
      isPlaced: true,
      coordinate: { x: 1, y: 1 },
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: [],
      errorMessage: '',
    };

    const expectedState = {
      isPlaced: true,
      coordinate: { x: 1, y: 1 },
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: ['REPORT( ) => OUTPUT: 1, 1, NORTH'],
      errorMessage: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.ADD_COMMAND,
        payload,
      }).reducer,
    ).toEqual(expectedState);
  });

  it('10.should handle add_command with MOVE command when isPlaced=false', () => {
    const payload = {
      command: 'MOVE',
    };

    const expectedState = {
      isPlaced: false,
      coordinate: null,
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: [],
      errorMessage: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.ADD_COMMAND,
        payload,
      }).reducer,
    ).toEqual(expectedState);
  });

  it('11.should handle add_command with LEFT command when isPlaced=false', () => {
    const payload = {
      command: 'LEFT',
    };

    const expectedState = {
      isPlaced: false,
      coordinate: null,
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: [],
      errorMessage: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.ADD_COMMAND,
        payload,
      }).reducer,
    ).toEqual(expectedState);
  });

  it('12.should handle add_command with RIGHT command when isPlaced=false', () => {
    const payload = {
      command: 'RIGHT',
    };

    const expectedState = {
      isPlaced: false,
      coordinate: null,
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: [],
      errorMessage: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.ADD_COMMAND,
        payload,
      }).reducer,
    ).toEqual(expectedState);
  });

  it('13.should handle add_command with REPORT command when isPlaced=false', () => {
    const payload = {
      command: 'REPORT',
    };

    const expectedState = {
      isPlaced: false,
      coordinate: null,
      facing: { x: 0, y: 1 },
      rotateDeg: 0,
      commands: [],
      errorMessage: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.ADD_COMMAND,
        payload,
      }).reducer,
    ).toEqual(expectedState);
  });

  it('14.should handle add_command with LEFT command when facing.y is zero', () => {
    const payload = {
      command: 'LEFT',
    };

    const initialState = {
      isPlaced: true,
      coordinate: { x: 1, y: 1 },
      facing: { x: 1, y: 0 },
      rotateDeg: 0,
      commands: [],
      errorMessage: '',
    };

    const expectedState = {
      isPlaced: true,
      coordinate: { x: 1, y: 1 },
      facing: { x: 0, y: 1 },
      rotateDeg: -90,
      commands: ['LEFT( )'],
      errorMessage: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.ADD_COMMAND,
        payload,
      }).reducer,
    ).toEqual(expectedState);
  });

  it('15.should handle add_command with RIGHT command when facing.x is negative', () => {
    const payload = {
      command: 'RIGHT',
    };

    const initialState = {
      isPlaced: true,
      coordinate: { x: 1, y: 1 },
      facing: { x: -1, y: 0 },
      rotateDeg: 0,
      commands: [],
      errorMessage: '',
    };

    const expectedState = {
      isPlaced: true,
      coordinate: { x: 1, y: 1 },
      facing: { x: 0, y: 1 },
      rotateDeg: 90,
      commands: ['RIGHT( )'],
      errorMessage: '',
    };

    expect(
      reducer({reducer: initialState}, {
        type: Action.ADD_COMMAND,
        payload,
      }).reducer,
    ).toEqual(expectedState);
  });
});
