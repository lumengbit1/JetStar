import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import configureMockStore from 'redux-mock-store'
import reducer from '../reducers';
import CommandInput from '../components/CommandInput';

const mockStore = configureMockStore([thunk]);
const store = mockStore();
const realStore = createStore(reducer, applyMiddleware(thunk));

afterEach(() => {
  cleanup();
});

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

    fireEvent.change(input, {target: {value: 'MOVE'}});
    expect(input.value).toBe('MOVE');
  });

  it('3: command shoule be passed into state when has command and run button is clicked', async () => {
    const { getByLabelText } = render(
      <Provider store={realStore}>
        <CommandInput />
      </Provider>,
    );

    const input = getByLabelText('command-input');
    const run = getByLabelText('run-button');

    fireEvent.change(input, {target: {value: 'PLACE,0,0,NORTH'}});
    fireEvent.click(run);

    expect(realStore.getState().reducer.commands).toEqual(["PLACE (0, 0, 'NORTH')"]);
  });

  it('4: state shoule be cleaned when has reset button is clicked', async () => {
    const { getByLabelText } = render(
      <Provider store={realStore}>
        <CommandInput />
      </Provider>,
    );

    const input = getByLabelText('command-input');
    const run = getByLabelText('run-button');
    const reset = getByLabelText('reset-button');

    fireEvent.change(input, {target: {value: 'PLACE,0,0,NORTH'}});
    fireEvent.click(run);
    fireEvent.click(reset);

    expect(realStore.getState().reducer.commands).toEqual([]);
  });

  it('5: commands state shoule keep empty when has run button is clicked without command is typed in', async () => {
    const { getByLabelText } = render(
      <Provider store={realStore}>
        <CommandInput />
      </Provider>,
    );

    const run = getByLabelText('run-button');

    fireEvent.click(run);

    expect(realStore.getState().reducer.commands).toEqual([]);
  });
});