import Enzyme from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import { Action } from '../reducers/constants';
import * as actions from '../reducers/actions';

Enzyme.configure({ adapter: new Adapter() });

const initialState = {
  isPlaced: false,
  coordinate: null,
  facing: { x: 0, y: 1 },
  rotateDeg: 0,
  commands: [],
  errorMessage: '',
};

const store = createStore(reducer, applyMiddleware(thunk));

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

  it('5.handleCommand function should be triggered when invoked', () => {
    const command = 'PLACE,0,0,NORTH';
    const expectedAction = {
      type: Action.ADD_COMMAND,
      payload: {
        command: 'PLACE,0,0,NORTH',
      },
    };

    store.dispatch(actions.handleCommand(command));
    expect(actions.add_command(command)).toEqual(expectedAction);
  });

  it('6.handleCommand function with error command', () => {
    const command = 'TEST,0,0,NORTH';
    const errorMessage = 'error';
    const expectedAction = {
      type: Action.ADD_ERROR,
      payload: {
        message: 'error',
      },
    };

    store.dispatch(actions.handleCommand(command));
    expect(actions.showError(errorMessage)).toEqual(expectedAction);
  });
});