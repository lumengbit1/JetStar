import React from 'react';
import { useSelector } from 'react-redux';
import { map } from 'lodash';
import { Root, Command } from './CommandList.style';

const CommandList = () => {
  const commands = useSelector((state) => state.reducer.commands);

  if (commands.length === 0) return null;

  return (
    <Root>
      {map(commands, (command, index) => (
        <Command
          key={`${command} + ${index}`}
          aria-label="command-list"
        >
          {command}
        </Command>
      ))}
    </Root>
  );
};

export default CommandList;
