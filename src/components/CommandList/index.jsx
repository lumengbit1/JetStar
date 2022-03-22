import React from 'react';
import { map } from 'lodash';
import { Root, Command } from './CommandList.style';

const CommandList = (props) => {
  const { state } = props;
  const { commands } = state;

  if (commands.length === 0) return null;

  return (
    <Root aria-label="command-list">
      {map(commands, (command, index) => (
        <Command
          key={`${command} + ${index}`}
        >
          {command}
        </Command>
      ))}
    </Root>
  );
};

export default CommandList;
