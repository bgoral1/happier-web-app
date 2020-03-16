import React from 'react';
import { ThemeProvider } from 'styled-components';

// import styled from 'styled-components';
// import { Link } from 'gatsby'

import GlobalStyle from 'theme/GlobalStyle';
import SEO from 'components/seo';
import Navigation from 'components/molecules/Navigation/Navigation';
import Button from 'components/atoms/Button/Button';

const IndexPage = () => (
  <div>
    <GlobalStyle />
    <SEO title="Home" />
    <ThemeProvider theme={}>
      <>
        <Navigation />
        <Button width="50px">Szukaj</Button>
        <Button>Szukaj</Button>
        <Button secondary>Anuluj</Button>
        <Button tertiary>Edytuj</Button>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
      </>
    </ThemeProvider>
  </div>
);

export default IndexPage;
