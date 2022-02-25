import { createAction } from 'redux-actions';
import { Action } from './constants';
import { getErrorMessage } from './util';

export const add_command = createAction(Action.ADD_COMMAND);

export const reset = createAction(Action.RESET);

export const showError = (message) => createAction(Action.ADD_ERROR, { message });

export const handleCommand = (command) => (dispatch) => {
  const Error = getErrorMessage(command);

  if (Error.length) {
    dispatch(showError(Error));

    return;
  }

  dispatch(add_command(command));
};
