import React, { createContext } from 'react';
import PropTypes from 'prop-types';
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

FirebaseContextProvider.propTypes = {
  children: PropTypes.node,
};

FirebaseContextProvider.defaultProps = {
  children: null,
};

export default FirebaseContextProvider;
