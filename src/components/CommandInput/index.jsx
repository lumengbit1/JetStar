import React from 'react';
import { Root, Input, ButtonContainer, Button } from './CommandInput.style';

const CommandInput = () => (
  <Root>
    <Input />
    <ButtonContainer>
      <Button>
        Run
      </Button>

      <Button>
        Reset
      </Button>
    </ButtonContainer>
  </Root>
)

export default CommandInput;