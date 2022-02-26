import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useImmer } from 'use-immer';
import { reset, handleCommand, clearErrorMessage } from '../../reducers/actions';
import { Root, Input, ButtonContainer, Button } from './CommandInput.style';

const CommandInput = () => {
  const [command, updateCommand] = useImmer('');
  const dispatch = useDispatch();

  const onChange = useCallback((e) => {
    updateCommand(e.target.value.toUpperCase());
  }, [updateCommand]);

  const handleSubmit = useCallback(
    () => {
      if (command.length === 0) return;

      dispatch(clearErrorMessage());

      dispatch(handleCommand(command));

      updateCommand('');
    },
    [command, clearErrorMessage, handleCommand, updateCommand],
  );

  const handleReset = useCallback(
    () => {
      dispatch(reset());

      updateCommand('');
    },
    [command, reset, updateCommand],
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
