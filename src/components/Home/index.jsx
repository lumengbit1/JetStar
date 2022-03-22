import React, { useContext } from 'react';
import CommandInput from '../CommandInput';
import CommandList from '../CommandList';
import ErrorMessage from '../ErrorMessage';
import { RootContext } from '../../App';
import { Root } from './Home.style';

const HomePage = () => {
  const { state, dispatch } = useContext(RootContext);

  return (
    <Root>
      <CommandInput state={state} dispatch={dispatch} />
      <ErrorMessage state={state} />
      <CommandList state={state} />
    </Root>
  );
};

export default HomePage;
