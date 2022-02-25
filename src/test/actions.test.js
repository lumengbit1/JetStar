import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Action } from '../reducers/constants';
import * as actions from '../reducers/actions';

Enzyme.configure({ adapter: new Adapter() });

// const initialState = {
//   isPlaced: false,
//   coordinate: null,
//   facing: { x: 0, y: 1 },
//   rotateDeg: 0,
//   commands: [],
//   errorMessage: '',
// };

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
// const store = mockStore(initialState);

describe('actions testing', () => {
  it('1.add_command function should be triggered when invoked', () => {
    const payload = 'test';
    const expectedAction = {
      type: Action.ADD_COMMAND,
      payload: {
        command: 'test',
      },
    };

    expect(actions.add_command(payload)).toEqual(expectedAction);
  });

  it('2.reset function should be triggered when invoked', () => {
    const expectedAction = {
      type: Action.RESET,
    };

    expect(actions.reset()).toEqual(expectedAction);
  });

  it('3.clearErrorMessage function should be triggered when invoked', () => {
    const expectedAction = {
      type: Action.CLEAR_ERROR_MESSAGE,
    };

    expect(actions.clearErrorMessage()).toEqual(expectedAction);
  });

  it('4.showError function should be triggered when invoked', () => {
    const payload = 'test';
    const expectedAction = {
      type: Action.ADD_ERROR,
      payload: {
        message: 'test',
      },
    };

    expect(actions.showError(payload)).toEqual(expectedAction);
  });
});