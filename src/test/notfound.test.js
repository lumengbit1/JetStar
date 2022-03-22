import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import AppNotFound from '../components/notfound';

describe('AppNotFound Test Cases', () => {
  it('1: Component shoule be rendered correctly', async () => {
    const { container } = render(
      <AppNotFound />,
    );

    expect(container).toMatchSnapshot();
  });
});
