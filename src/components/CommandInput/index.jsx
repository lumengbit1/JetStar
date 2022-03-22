import React, { useCallback } from 'react';
import { useImmer } from 'use-immer';
import { Root, Input, ButtonContainer, Button } from './CommandInput.style';
import { Action } from '../../reducers/constants';
import { getErrorMessage } from '../../reducers/util';

const CommandInput = (props) => {
  const [command, updateCommand] = useImmer('');
  const { state, dispatch } = props;
  const onChange = useCallback((e) => {
    updateCommand(e.target.value.toUpperCase());
  }, [updateCommand]);

  const handleCommand = (command) => {
    const { isPlaced, coordinate, facing } = state;

    const Error = getErrorMessage(command, isPlaced, coordinate, facing);

    if (Error.length) {
      dispatch({ type: Action.ADD_ERROR, message: Error });

      return;
    }

    dispatch({ type: Action.ADD_COMMAND, command });
  };

  const handleSubmit = useCallback(
    () => {
      if (command.length === 0) return;

      dispatch({ type: Action.CLEAR_ERROR_MESSAGE });

      handleCommand(command);

      updateCommand('');
    },
    [command],
  );

  const handleReset = useCallback(
    () => {
      updateCommand('');
    },
    [command, updateCommand],
  );

  return (
    <Root>
      <Input
        value={command}
        aria-label="command-input"
        onChange={onChange}
        placeholder="Tell the robot what to do ..."
      />
      <ButtonContainer>
        <Button
          onClick={handleSubmit}
          aria-label="run-button"
        >
          Run
        </Button>

        <Button
          onClick={handleReset}
          aria-label="reset-button"
        >
          Reset
        </Button>
      </ButtonContainer>
    </Root>
  );
};

export default CommandInput;
