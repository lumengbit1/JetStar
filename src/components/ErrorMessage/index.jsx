import React from 'react';
import { useSelector } from 'react-redux';
import { Command } from './ErrorMessage.style';

const ErrorMessage = () => {
  const errorMessage = useSelector((state) => state.reducer.errorMessage);

  if (errorMessage.length === 0) return null;

  return (
    <Command aria-label="error-list">
      {errorMessage}
    </Command>
  );
};

export default ErrorMessage;
