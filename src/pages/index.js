import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import SEO from 'components/seo';
import Navigation from 'components/molecules/navigation';

const IndexPage = () => (
  <div>
    <GlobalStyle />
    <SEO title="Home" />
    <ThemeProvider theme={theme}>
      <>
        <Navigation />
      </>
    </ThemeProvider>
  </div>
);

export default IndexPage;
