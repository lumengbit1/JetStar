import React from 'react';
import CommandInput from '../CommandInput';
import CommandList from '../CommandList';
import { Root } from './Home.style';

const HomePage = () => (
  <Root>
    <CommandInput />
    <CommandList />
  </Root>
);

export default HomePage;
