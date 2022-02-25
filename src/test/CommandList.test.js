import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'
import CommandList from '../components/CommandList';

const mockStore = configureMockStore([thunk]);

describe('CommandList Test Cases', () => {
  it('1: Component shoule be rendered correctly', async () => {
    const store = mockStore({
      reducer: { commands: 'MOVE' }
    });

    const { container } = render(
      <Provider store={store}>
        <CommandList />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});