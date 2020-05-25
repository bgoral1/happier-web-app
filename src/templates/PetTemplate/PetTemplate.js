/* eslint-disable react/prop-types */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
// import SEO from 'components/SEO/seo';
import Header from 'components/organisms/Header/Header';
import ReturnBar from 'components/molecules/ReturnBar/ReturnBar';
import BackgroundImg from 'components/atoms/BackgroundImg/BackgroundImg';
import Footer from 'components/organisms/Footer/Footer';

const PetDetails = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  ${theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding: 30px;
    background-color: ${theme.primary};
  }

  ${theme.mq.desktop} {
    width: 70%;
    margin-right: auto;
    margin-left: auto;
  }
`;

const ImageWrapper = styled.div`
  background-color: ${theme.primary};
  padding: 20px;
  position: relative;
  z-index: -1;

  ${theme.mq.tablet} {
    order: 2;
    padding: 0;
    z-index: 1;
  }
`;

const PetDetailsImg = styled(Image)`
  width: 320px;
  height: 320px;
  object-fit: cover;
  object-position: 50% 0;

  ${theme.mq.desktop} {
    width: 500px;
    height: 500px;
  }
`;

const PetDetailsDesc = styled.div`
  background-color: ${theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  height: 30vh;

  ${theme.mq.tablet} {
    order: 1;
    margin-right: 40px;
    height: 30vh;
  }
  ${theme.mq.desktop} {
    height: 60vh;
  }
`;

const PetTemplate = ({ data }) => (
  <>
    {/* <SEO /> */}
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <ReturnBar />
        <BackgroundImg />
        <PetDetails>
          <ImageWrapper>
            <PetDetailsImg
              fluid={data.pet.localImage.childImageSharp.fluid}
              alt="pet"
            />
          </ImageWrapper>
          <PetDetailsDesc>
            <h1>{data.pet.name}</h1>
            <small>{data.pet.institution.name}</small>
            <h3>{data.pet.lead}</h3>
            <p>{data.pet.description}</p>
          </PetDetailsDesc>
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
            ...GatsbyImageSharpFluid_noBase64
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
