import { screen, render } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import { NotificationBox } from './NotificationBox';

describe('NotificationBox component', () => {
  it('shows loader when notification header is an empty', () => {
    render(
      <ThemeProvider theme={theme}>
        <NotificationBox header="" closeNotification={() => null} />
      </ThemeProvider>
    );

    const box = screen.getByLabelText('audio-loading');
    expect(box).toBeInTheDocument();
  });

  it('shows notification when header is not empty', () => {
    render(
      <ThemeProvider theme={theme}>
        <NotificationBox
          header="Notification header"
          closeNotification={() => null}
        />
      </ThemeProvider>
    );
    const box = screen.getByRole('heading', { level: 3 });
    expect(box).toBeInTheDocument();
  });
});
