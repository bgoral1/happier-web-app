/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import useAuth from 'context/Firebase/useAuth';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';

export const FirebaseContext = createContext();

const FirebaseContextProvider = ({ children }) => {
  const { user, firebase, loading } = useAuth();
  return (
    <FirebaseContext.Provider value={{ user, firebase, loading }}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider;
