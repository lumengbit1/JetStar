import React from 'react';
import { Command } from './ErrorMessage.style';

const ErrorMessage = (props) => {
  const { state } = props;
  const { errorMessage } = state;

  if (errorMessage.length === 0) return null;

  return (
    <Command aria-label="error-list">
      {errorMessage}
    </Command>
  );
};

export default ErrorMessage;
