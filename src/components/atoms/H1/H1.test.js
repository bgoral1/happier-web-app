import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';

import H1 from './H1';

describe('H1 component', () => {
  it('renders children text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <H1>Sign in</H1>
      </ThemeProvider>
    );
    getByText('Sign in');
  });
});
