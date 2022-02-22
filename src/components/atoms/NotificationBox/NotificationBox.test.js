import { screen, render } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import { NotificationBox } from './NotificationBox';

describe('NotificationBox component', () => {
  it('shows loader when notification header is empty', () => {
    render(
      <ThemeProvider theme={theme}>
        <NotificationBox header="" closeNotification={jest.fn()} />
      </ThemeProvider>
    );

    const loader = screen.getByLabelText('audio-loading');
    expect(loader).toBeInTheDocument();
  });

  it('hide loader when there is notification', () => {
    render(
      <ThemeProvider theme={theme}>
        <NotificationBox
          header="Notification header"
          closeNotification={jest.fn()}
        />
      </ThemeProvider>
    );
    const loader = screen.queryByLabelText('audio-loading');
    expect(loader).not.toBeInTheDocument();
  });

  it('shows notification when header is not empty', () => {
    render(
      <ThemeProvider theme={theme}>
        <NotificationBox
          header="Notification header"
          closeNotification={jest.fn()}
        />
      </ThemeProvider>
    );
    const notification = screen.getByRole('heading', { level: 3 });
    expect(notification).toBeInTheDocument();
  });

  it('hide notification when heder is empty', () => {
    render(
      <ThemeProvider theme={theme}>
        <NotificationBox header="" closeNotification={jest.fn()} />
      </ThemeProvider>
    );
    const notification = screen.queryByRole('heading', { level: 3 });
    expect(notification).not.toBeInTheDocument();
  });
});
