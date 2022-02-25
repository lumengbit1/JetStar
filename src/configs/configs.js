import { keys } from 'lodash';
import settings from '../settings';

export const ORIENTATION = {
  NORTH: { x: 0, y: 1 },
  EAST: { x: 1, y: 0 },
  SOUTH: { x: 0, y: -1 },
  WEST: { x: -1, y: 0 },
};

export const INITIAL_ROTATE_DEG = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
};

export const COMMANDS = ['PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT'];

export const FACING_DIRECTIONS = keys(ORIENTATION);

export const TABLE_DIMENSION = {
  x: settings.GRID.X,
  y: settings.GRID.Y,
};

export const ERRORS = {
  invalidCommand: `Invalid command. Please pick commands from ${COMMANDS.join(' | ')}.`,
  notInitialized: `The robot is not placed on the table yet. Place it first with 'PLACE X,Y,F'`,
  invalidInitialCommand: `Invalid PLACE command. The valid PLACE command should be 'PLACE X,Y,F'.`,
  wrongCoordinate: `Invalid coordinate value. It must be non-negative interger.`,
  wrongDirection: `Invalid facing direction value. Available directions should be ${FACING_DIRECTIONS.join(' | ')}.`,
  fallOff: `The robot fall off from the table`,
  wrongMovingDirection: `The robot can't move forward on that direction, it may fall off the table.`
};