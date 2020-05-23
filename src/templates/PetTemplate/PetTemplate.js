/* eslint-disable react/prop-types */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
// import SEO from 'components/SEO/seo';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

const PetDetails = styled.div`
  height: 100vh;
  background-color: ${theme.primary};
  margin-top: 73px;
`;

const PetTemplate = ({ pageContext }) => (
  <>
    {/* <SEO /> */}
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <PetDetails>
          <h1>Imię: {pageContext.name}</h1>
          <small>{pageContext.institution.name}</small>
          <h2>{pageContext.lead}</h2>
          <p>Opis: {pageContext.description}</p>
        </PetDetails>
        <Footer />
      </>
    </ThemeProvider>
  </>
);

export default PetTemplate;
