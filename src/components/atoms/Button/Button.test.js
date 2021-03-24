import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import Button from './Button';

describe('Button component', () => {
  it('renders properly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Search</Button>
      </ThemeProvider>
    );
    const button = screen.getByRole('button', { name: 'Search' });
    expect(button).toBeInTheDocument();
  });
});
