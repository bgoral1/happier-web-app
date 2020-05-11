import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import SEO from 'components/SEO/seo';
import Header from 'components/molecules/Header/Header';

const MainTemplate = ({ children }) => (
  <>
    <SEO />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header />
        {children}
      </>
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainTemplate;
