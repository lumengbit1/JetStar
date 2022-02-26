import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'
import ErrorMessage from '../components/ErrorMessage';

const mockStore = configureMockStore([thunk]);
const store = mockStore();

describe('ErrorMessage Test Cases', () => {
  it('1: Component shoule be rendered correctly', async () => {
    const store = mockStore({
      reducer: { errorMessage: 'error message' }
    });

    const { container } = render(
      <Provider store={store}>
        <ErrorMessage />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});