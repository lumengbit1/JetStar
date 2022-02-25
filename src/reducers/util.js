import { ORIENTATION } from '../configs/configs';

export const getCommandValues = (command) => command.split(/[\s,]+/);

export const getFacingDirection = ({ x, y }) => {
  const key = keys(ORIENTATION);

  return find(key, (k) => {
    const value = ORIENTATION[k];

    return value.x === x && value.y === y;
  });
};

export const getErrorMessage = (inputedCommand) => {
  const commandValues = getCommandValues(inputedCommand);

  const command = commandValues[0];

  const errors = '';

  return errors;
};
