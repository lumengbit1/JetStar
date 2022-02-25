import React from 'react';
import CommandInput from '../CommandInput';
import CommandList from '../CommandList';
import ErrorMessage from '../ErrorMessage';
import { Root } from './Home.style';

const HomePage = () => (
  <Root>
    <CommandInput />
    <ErrorMessage />
    <CommandList />
  </Root>
);

export default HomePage;
