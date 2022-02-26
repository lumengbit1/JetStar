import { includes, keys, find, isInteger } from 'lodash';
import { ORIENTATION, COMMANDS, ERRORS, FACING_DIRECTIONS, TABLE_DIMENSION } from '../configs/configs';

export const getCommandValues = (command) => command.split(/[\s,]+/);

export const getFacingDirection = ({ x, y }) => {
  const key = keys(ORIENTATION);

  return find(key, (k) => {
    const value = ORIENTATION[k];

    return value.x === x && value.y === y;
  });
};

export const isValidCoordinate = (x) => isInteger(x) && Math.sign(x) >= 0;

export const isRobotOnTable = (x, y) => x > -1 && x < TABLE_DIMENSION.x && y > -1 && y < TABLE_DIMENSION.y;

export const getErrorMessage = (inputedCommand, isPlaced, coordinate, facing) => {
  const commandValues = getCommandValues(inputedCommand);

  const command = commandValues[0];

  let errors = '';

  if (command) {
    // Error for invalid command
    if (!includes(COMMANDS, command)) {
      errors = ERRORS.invalidCommand;

      return errors;
    }

    if (command === 'PLACE') {
      // Error for invalid initial command
      if (commandValues.length < 4) {
        errors = ERRORS.invalidInitialCommand;

        return errors;
      }
      const x = parseInt(commandValues[1], 10);

      const y = parseInt(commandValues[2], 10);

      const f = commandValues[3];

      if (!isValidCoordinate(x) || !isValidCoordinate(y)) {
        errors = ERRORS.wrongCoordinate;

        return errors;
      }

      if (!includes(FACING_DIRECTIONS, f)) {
        errors = ERRORS.wrongDirection;

        return errors;
      }

      if (!isRobotOnTable(x, y)) {
        errors = ERRORS.fallOff;

        return errors;
      }
    } else {
      // Error for robot not being replaced
      if (!isPlaced) {
        errors = ERRORS.notInitialized;

        return errors;
      }

      if (command === 'MOVE' && coordinate !== null) {
        const nextX = coordinate.x + facing.x;

        const nextY = coordinate.y + facing.y;

        // Error for robot fall off from the table
        if (!isRobotOnTable(nextX, nextY)) {
          errors = ERRORS.wrongMovingDirection;

          return errors;
        }
      }
    }
  }

  return errors;
};
