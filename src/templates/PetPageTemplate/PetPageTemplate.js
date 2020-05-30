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
import H1 from 'components/atoms/H1/H1';
import H2 from 'components/atoms/H2/H2';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Icon from 'components/atoms/Icon/Icon';
import iconLocalization from 'images/icons/icon_localization.svg';
import iconMale from 'images/icons/icon_sexMale.svg';
import iconFemale from 'images/icons/icon_sexFemale.svg';
import LinkWithIcon from 'components/atoms/LinkWithIcon/LinkWithIcon';
import ContactSection from 'components/organisms/ContactSection/ContactSection';
import PetFeature from 'components/atoms/PetFeature/PetFeature';

const ContactSectionWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.grey200};
  padding: 16px 0;
  position: relative;

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    margin: 0 auto;
  }
`;

const PetFeatureSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 120px;
  ${({ theme }) => theme.mq.desktop} {
    min-height: 80px;
  }
`;

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
    grid-template-columns: 2fr, 1fr;
    background-color: ${({ theme }) => theme.primary};
    grid-template-areas: 'section section img';
  }
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};

  ${({ theme }) => theme.mq.tablet} {
    order: 2;
    z-index: 1;
    grid-area: 'img';
  }
`;

const PetDetailsImg = styled(Image)`
  @media (max-width: 359px) {
    width: 280px;
    height: 280px;
  }

  width: 320px;
  height: 320px;
  object-fit: cover;
  object-position: 50% 0;

  ${({ theme }) => theme.mq.large} {
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
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    order: 1;
    min-height: 30vh;
    grid-area: 'section';
  }

  ${H1} {
    border-bottom: 3px solid ${({ theme }) => theme.grey200};
    display: flex;
    justify-content: center;
    width: 90%;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }

  ${LinkWithIcon} p {
    display: inline-block;
    color: ${({ theme }) => theme.grey300};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }

  ${LinkWithIcon} svg {
    height: 25px;
  }

  article {
    padding: 20px;
  }
`;

const StyledIcon = styled(Icon)`
  margin-left: 15px;
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
          <H1>
            {data.pet.name}
            <StyledIcon src={data.pet.sex === 'male' ? iconMale : iconFemale} />
          </H1>
          <LinkWithIcon src={iconLocalization}>
            {data.pet.institution.city}, {data.pet.institution.name}
          </LinkWithIcon>
          <article>
            <H2>{data.pet.lead}</H2>
            <Paragraph>{data.pet.description}</Paragraph>
            <Paragraph>{data.pet.institution.email}</Paragraph>
          </article>
          <PetFeatureSection>
            {Object.entries(data.pet.filters).map(([key, value]) => (
              <PetFeature key={key}>{value}</PetFeature>
            ))}
          </PetFeatureSection>
        </PetDetailsDesc>
      </PetDetails>
    </StyledMainBackground>
    <ContactSectionWrapper>
      <ContactSection
        labelText="Zapytaj o możliwość adopcji"
        headingText="Napisz wiadomość do schroniska"
      />
    </ContactSectionWrapper>
    <Footer />
  </>
);

export const query = graphql`
  query PetQuery($petId: String!) {
    pet(id: { eq: $petId }) {
      id
      name
      filters {
        activity
        age
        bread
        place
        size
        time
      }
      sex
      species
      lead
      description
      localImage {
        childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      institution {
        name
        email
        city
      }
    }
  }
`;

export default PetTemplate;
