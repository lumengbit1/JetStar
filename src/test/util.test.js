import { 
  getCommandValues, 
  getFacingDirection, 
  isValidCoordinate, 
  isRobotOnTable,
  getErrorMessage,
 } from '../reducers/util';
import { ERRORS } from '../configs/configs';

describe('Test util functions', () => {
  it('1.should handle getCommandValues', () => {
    const input = 'PLACE,0,0,NORTH';
    const output = ['PLACE', '0', '0', 'NORTH'];

    expect(getCommandValues(input)).toEqual(output);
  });

  it('2.should handle getFacingDirection', () => {
    const input = {x: 0, y: 1};
    const output = 'NORTH';

    expect(getFacingDirection(input)).toEqual(output);
  });

  it('3.should handle isValidCoordinate', () => {
    const input = 1;
    const output = true;

    expect(isValidCoordinate(input)).toEqual(output);
  });

  it('4.should handle isRobotOnTable', () => {
    const x = 1;
    const y = 1;
    const output = true;

    expect(isRobotOnTable(x, y)).toEqual(output);
  });

  it('5.should handle getErrorMessage with invalidCommand', () => {
    const input = 'TEST';
    const output = ERRORS.invalidCommand;

    expect(getErrorMessage(input)).toEqual(output);
  });

  it('6.should handle getErrorMessage with notInitialized', () => {
    const input = 'MOVE';
    const output = ERRORS.notInitialized;

    expect(getErrorMessage(input)).toEqual(output);
  });

  it('7.should handle getErrorMessage with invalidInitialCommand', () => {
    const input = 'PLACE,0,0';
    const output = ERRORS.invalidInitialCommand;

    expect(getErrorMessage(input)).toEqual(output);
  });

  it('8.should handle getErrorMessage with wrongCoordinate', () => {
    const input = 'PLACE,0,-1,NORTH';
    const output = ERRORS.wrongCoordinate;

    expect(getErrorMessage(input)).toEqual(output);
  });

  it('9.should handle getErrorMessage with wrongDirection', () => {
    const input = 'PLACE,0,0,TEST';
    const output = ERRORS.wrongDirection;

    expect(getErrorMessage(input)).toEqual(output);
  });

  it('10.should handle getErrorMessage with fallOff', () => {
    const input = 'PLACE,5,5,NORTH';
    const output = ERRORS.fallOff;

    expect(getErrorMessage(input)).toEqual(output);
  });

  it('11.should handle getErrorMessage with wrongMovingDirection', () => {
    const inputedCommand = 'MOVE';
    const isPlaced = true;
    const coordinate = {x: 4, y: 4};
    const facing ={x: 0, y: 1};
    const output = ERRORS.wrongMovingDirection;

    expect(getErrorMessage(inputedCommand, isPlaced, coordinate, facing)).toEqual(output);
  });

  it('12.should handle getErrorMessage without error', () => {
    const inputedCommand = 'PLACE,0,0,NORTH';
    const isPlaced = true;
    const coordinate = {x: 0, y: 0};
    const facing ={x: 0, y: 1};
    const output = '';

    expect(getErrorMessage(inputedCommand, isPlaced, coordinate, facing)).toEqual(output);
  });

  it('13.should handle getErrorMessage with MOVE command and coordinate=null', () => {
    const inputedCommand = 'MOVE';
    const isPlaced = true;
    const coordinate = null;
    const facing ={x: 0, y: 1};
    const output = '';

    expect(getErrorMessage(inputedCommand, isPlaced, coordinate, facing)).toEqual(output);
  });

  it('13.should handle getErrorMessage with MOVE command and will not fall off from table', () => {
    const inputedCommand = 'MOVE';
    const isPlaced = true;
    const coordinate = {x: 2, y: 2};
    const facing ={x: 0, y: 1};
    const output = '';

    expect(getErrorMessage(inputedCommand, isPlaced, coordinate, facing)).toEqual(output);
  });
});