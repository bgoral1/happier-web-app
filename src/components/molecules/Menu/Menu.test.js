import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';

import Menu from './Menu';

describe('Menu component', () => {
  it('renders routes', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Menu />
      </ThemeProvider>
    );
    expect(getByText('About')).toBeInTheDocument();
  });
});
