/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
// import SEO from 'components/SEO/seo';
import Header from 'components/organisms/Header/Header';
import ReturnBar from 'components/molecules/ReturnBar/ReturnBar';
import MainBackground from 'components/molecules/MainBackground/MainBackground';
import Footer from 'components/organisms/Footer/Footer';
import Heading from 'components/atoms/Heading/Heading';

const StyledMainBackground = styled(MainBackground)`
  background-image: none;
  background-position: 0 0;
  background-size: auto;
`;

const PetDetails = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
    background-color: ${({ theme }) => theme.primary};
  }
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};

  ${({ theme }) => theme.mq.tablet} {
    order: 2;
    z-index: 1;
  }
`;

const PetDetailsImg = styled(Image)`
  width: 320px;
  height: 320px;
  object-fit: cover;
  object-position: 50% 0;

  ${({ theme }) => theme.mq.desktop} {
    width: 500px;
    height: 500px;
  }
`;

const PetDetailsDesc = styled.div`
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 30vh;
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    order: 1;
    height: 30vh;
  }
  ${({ theme }) => theme.mq.desktop} {
    height: 60vh;
  }
`;

const PetTemplate = ({ data }) => (
  <>
    {/* <SEO /> */}
    <Header />
    <ReturnBar />
    <StyledMainBackground>
      <PetDetails>
        <ImageWrapper>
          <PetDetailsImg
            fluid={data.pet.localImage.childImageSharp.fluid}
            alt="pet"
          />
        </ImageWrapper>
        <PetDetailsDesc>
          <Heading>{data.pet.name}</Heading>
          <small>{data.pet.institution.name}</small>
          <h3>{data.pet.lead}</h3>
          <p>{data.pet.description}</p>
          <p>{data.pet.id}</p>
        </PetDetailsDesc>
      </PetDetails>
    </StyledMainBackground>
    <Footer />
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
