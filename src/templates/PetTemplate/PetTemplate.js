/* eslint-disable react/prop-types */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
// import SEO from 'components/SEO/seo';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

const PetDetails = styled.div`
  height: 100vh;
  background-color: ${theme.primary};
  margin-top: 73px;
`;

const PetDetailsImg = styled(Image)`
  width: 500px;
  height: 500px;
  object-fit: cover;
  object-position: 50% 0;
`;

const PetTemplate = ({ data }) => (
  <>
    {/* <SEO /> */}
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <PetDetails>
          <PetDetailsImg
            fluid={data.pet.localImage.childImageSharp.fluid}
            alt="pet"
          />
          <h1>Imię: {data.pet.name}</h1>
          <small>{data.pet.institution.name}</small>
          <h2>{data.pet.lead}</h2>
          <p>Opis: {data.pet.description}</p>
        </PetDetails>
        <Footer />
      </>
    </ThemeProvider>
  </>
);

export const query = graphql`
  query PetQuery($petId: String!) {
    pet(id: { eq: $petId }) {
      id
      description
      lead
      name
      localImage {
        childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      institution {
        name
      }
    }
  }
`;

export default PetTemplate;
