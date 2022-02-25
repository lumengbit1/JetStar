import { includes, keys, find } from 'lodash';
import { ORIENTATION, COMMANDS, ERRORS } from '../configs/configs';

export const getCommandValues = (command) => command.split(/[\s,]+/);

export const getFacingDirection = ({ x, y }) => {
  const key = keys(ORIENTATION);

  return find(key, (k) => {
    const value = ORIENTATION[k];

    return value.x === x && value.y === y;
  });
};

export const getErrorMessage = (inputedCommand, isPlaced) => {
  const commandValues = getCommandValues(inputedCommand);

  const command = commandValues[0];

  let errors = '';

  if (command) {
    // Error for invalid command
    if (!includes(COMMANDS, command)) {
      errors = ERRORS.invalidCommand;

      return errors;
    }

    // Error for robot not being replaced
    if (!isPlaced) {
      errors = ERRORS.notInitialized;

      return errors;
    }
  }

  return errors;
};
