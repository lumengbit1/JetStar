import { CommandTypes, Action } from './constants';
import { getCommandValues, getFacingDirection } from './util';
import { ORIENTATION, INITIAL_ROTATE_DEG } from '../configs/configs';
import { initialState } from '../App';

const reducer = (draft, action) => {
  switch (action.type) {
    case Action.ADD_COMMAND: {
      const commandValues = getCommandValues(action.command);

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
          draft.commands = [...draft.commands, `${CommandTypes.PLACE} (${x}, ${y}, '${f}')`];

          return draft;
          break;
        }

        case CommandTypes.MOVE: {
          if (!draft.isPlaced || draft.coordinate === null) return draft;

          draft.coordinate = {
            x: draft.coordinate.x + draft.facing.x,
            y: draft.coordinate.y + draft.facing.y,
          };
          draft.commands = [...draft.commands, `${CommandTypes.MOVE}( )`];

          return draft;
          break;
        }

        case CommandTypes.LEFT: {
          if (!draft.isPlaced) return draft;

          draft.facing = {
            x: draft.facing.y !== 0 ? -draft.facing.y : 0,
            y: draft.facing.x,
          };
          draft.rotateDeg -= 90;
          draft.commands = [...draft.commands, `${CommandTypes.LEFT}( )`];

          return draft;
          break;
        }

        case CommandTypes.RIGHT: {
          if (!draft.isPlaced) return draft;

          draft.facing = {
            x: draft.facing.y,
            y: draft.facing.x !== 0 ? -draft.facing.x : 0,
          };
          draft.rotateDeg += 90;
          draft.commands = [...draft.commands, `${CommandTypes.RIGHT}( )`];

          return draft;
          break;
        }

        case CommandTypes.REPORT: {
          if (!draft.isPlaced || draft.coordinate === null) return draft;

          const facingDirection = getFacingDirection(draft.facing);

          draft.commands = [
            ...draft.commands,
            `REPORT( ) => OUTPUT: ${draft.coordinate.x}, ${draft.coordinate.y}, ${facingDirection}`,
          ];

          return draft;
          break;
        }

        default: {
          return draft;
        }
      }
    }

    case Action.CLEAR_ERROR_MESSAGE: {
      draft.errorMessage = '';

      return draft;
      break;
    }

    case Action.RESET: {
      draft = initialState;

      return draft;
      break;
    }

    case Action.ADD_ERROR: {
      draft.errorMessage = action.message;

      return draft;
      break;
    }

    default: {
      return draft;
    }
  }
};

export default reducer;
