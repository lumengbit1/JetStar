import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import { add_command } from './actions';

const initialState = {
  isPlaced: false,
  coordinate: null,
  facing: { x: 0, y: 1 },
  rotateDeg: 0,
  commands: [],
  errorMessage: ''
};

const getCommandValues = command => command.split(/[\s,]+/);

const reducer = handleActions(
  {
    [add_command]: (state, action) => {

      const commandValues = getCommandValues(action.payload);

      const command = commandValues[0];
 
      return command;
    },
  },
  initialState,
);

export default reducer;