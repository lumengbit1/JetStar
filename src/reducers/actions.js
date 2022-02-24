import { createAction } from 'redux-actions';
import { Action } from './constants';

export const add_command = createAction(Action.ADD_COMMAND);

export const reset = createAction(Action.RESET);
