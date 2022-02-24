import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useImmer } from "use-immer";
import { add_command } from '../../reducers/actions';
import { Root, Input, ButtonContainer, Button } from './CommandInput.style';

const CommandInput = () => {
  const [command, updateCommand] = useImmer('');
  const dispatch = useDispatch();

  const onChange = useCallback((e) => {
    e.preventDefault();

    updateCommand(e.target.value.toUpperCase());
  }, []);

  return (
    <Root>
      <Input
        value={command}
        onChange={onChange}
        placeholder="Tell the robot what to do ..."
      />
      <ButtonContainer>
        <Button onClick={() => dispatch(add_command(command))}>
          Run
        </Button>

        <Button>
          Reset
        </Button>
      </ButtonContainer>
    </Root>
  )
}

export default CommandInput;