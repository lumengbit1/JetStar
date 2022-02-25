import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'
import CommandInput from '../components/CommandInput';

const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe('CommandInput Test Cases', () => {
  it('1: Component shoule be rendered correctly', async () => {
    const { container } = render(
      <Provider store={store}>
        <CommandInput />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('2: Input shoule have correct value when type in', async () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <CommandInput />
      </Provider>,
    );

    const input = getByLabelText('command-input');

    fireEvent.change(input, {target: {value: 'MOVE'}})
    expect(input.value).toBe('MOVE')
  });
});