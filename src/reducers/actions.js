import { createAction } from 'redux-actions';
import { Action } from './constants';
import { getErrorMessage } from './util';

export const add_command = createAction(Action.ADD_COMMAND);

export const reset = createAction(Action.RESET);

export const showError = createAction(Action.ADD_ERROR, (params) => ({
  message: params,
}));

export const clearErrorMessage = createAction(Action.CLEAR_ERROR_MESSAGE);

export const handleCommand = (command) => (dispatch, getState) => {
  const { reducer: { isPlaced, coordinate, facing } } = getState();

  const Error = getErrorMessage(command, isPlaced, coordinate, facing);

  if (Error.length) {
    dispatch(showError(Error));

    return;
  }

  dispatch(add_command(command));
};
