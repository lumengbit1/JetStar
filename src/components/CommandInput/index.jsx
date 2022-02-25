import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useImmer } from 'use-immer';
import { reset, handleCommand, clearErrorMessage } from '../../reducers/actions';
import { Root, Input, ButtonContainer, Button } from './CommandInput.style';

const CommandInput = () => {
  const [command, updateCommand] = useImmer('');
  const dispatch = useDispatch();

  const onChange = useCallback((e) => {
    e.preventDefault();

    updateCommand(e.target.value.toUpperCase());
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (command.length === 0) return;

      dispatch(clearErrorMessage());

      dispatch(handleCommand(command));

      updateCommand('');
    },
    [command],
  );

  const handleReset = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(reset());

      updateCommand('');
    },
    [command],
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
        <Button onClick={handleSubmit}>
          Run
        </Button>

        <Button onClick={handleReset}>
          Reset
        </Button>
      </ButtonContainer>
    </Root>
  );
};

export default CommandInput;
