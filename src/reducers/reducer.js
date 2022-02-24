import { handleActions } from 'redux-actions';
import { produce } from 'immer';
import { add_command, reset } from './actions';
import { CommandTypes } from './constants';
import { ORIENTATION, INITIAL_ROTATE_DEG } from '../configs/configs';

const initialState = {
  isPlaced: false,
  coordinate: null,
  facing: { x: 0, y: 1 },
  rotateDeg: 0,
  commands: [],
  errorMessage: '',
};

const getCommandValues = (command) => command.split(/[\s,]+/);

const reducer = handleActions(
  {
    [add_command]: (state, action) => produce(state, (draft) => {
      const commandValues = getCommandValues(action.payload);

      const command = commandValues[0];

      switch (command) {
        case CommandTypes.PLACE: {
          const x = parseInt(commandValues[1], 10);

          const y = parseInt(commandValues[2], 10);

          const f = commandValues[3];

          draft.facing = ORIENTATION[f];
          draft.coordinate = { x, y };
          draft.rotateDeg = INITIAL_ROTATE_DEG[f];
          draft.isPlaced = true;
          draft.commands = [...state.commands, `${CommandTypes.PLACE} ${x},${y},${f}`];
          return draft;
        }

        default: {
          return state;
        }
      }
    }),

    [reset]: (state) => produce(state, () => initialState),
  },
  initialState,
);

export default reducer;
