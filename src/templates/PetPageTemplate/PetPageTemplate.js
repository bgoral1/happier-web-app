/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import SEO from 'components/molecules/SEO/seo';
import { FirebaseContext } from 'context/Firebase/context';
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
import logoHappierHeart from 'images/logo_happier_heart.svg';
import { zoom } from 'components/molecules/Card/Card';
import { NotificationBox } from 'components/atoms/NotificationBox/NotificationBox';

const ContactSectionWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.gray200};
  padding: 16px 0;
  position: relative;

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    margin: 0 auto;
  }
`;

const PetFeatureSection = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 120px;
  background-color: ${({ theme }) => theme.white};
  ${({ theme }) => theme.mq.tablet} {
    background-color: transparent;
  }
  ${({ theme }) => theme.mq.desktop} {
    min-height: 80px;
    justify-content: center;
    background-color: ${({ theme }) => theme.white};
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
    grid-template-columns: 1fr, 2fr;
    background-color: ${({ theme }) => theme.primary};
    grid-template-areas: 'section img';
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 2fr, 1fr;
    grid-template-areas: 'section img';
  }
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  position: relative;

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

  ${({ theme }) => theme.mq.tablet} {
    height: 500px;
  }
  ${({ theme }) => theme.mq.desktop} {
    height: 360px;
  }

  ${({ theme }) => theme.mq.large} {
    width: 500px;
    height: 500px;
  }

  :hover img {
    animation: ${zoom} 1s ease-in-out forwards;
  }
`;

const WishIcon = styled(Icon)`
  position: absolute;
  top: 3vh;
  right: 3vh;
  z-index: 3000;

  path {
    fill: ${({ isClicked, theme }) =>
      isClicked ? theme.primary : theme.accent};
  }

  &:hover,
  &:focus {
    cursor: pointer;
    path {
      fill: ${({ theme }) => theme.primary};
    }
  }
`;

const StyledLink = styled(Link)`
  font-weight: ${({ theme }) => theme.font.weight.semiBold};

  &:hover {
    color: ${({ theme }) => theme.accent};
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
    border-bottom: 3px solid ${({ theme }) => theme.gray200};
    display: flex;
    justify-content: center;
    width: 90%;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }

  ${LinkWithIcon} p {
    display: inline-block;
    color: ${({ theme }) => theme.gray300};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    text-transform: capitalize;
  }

  ${LinkWithIcon} svg {
    height: 25px;
  }

  article {
    padding: 0 20px 20px 20px;
    width: 100%;

    h2 {
      padding: 15px 0;
    }

    p:first-of-type {
      min-height: 100px;
    }
  }
`;

const StyledIcon = styled(Icon)`
  margin-left: 15px;
`;

const PetTemplate = ({ data }) => {
  const { firebase, user } = useContext(FirebaseContext);

  const [isWishIconClicked, setWishIconClicked] = useState(false);
  const [notification, setNotification] = useState(null);

  const addToWatched = id => {
    if (user) {
      firebase
        .addPetToWatched({ petId: id, userName: user.userName })
        .then(() => {
          setNotification('Added to favourities');
        })
        .catch(() =>
          setNotification('Sorry, an error occurred. Please try again later.')
        );
    } else {
      setNotification('Only logged-in users can use this feature.');
    }
  };

  const renderNotification = () => (
    <NotificationBox
      header={notification !== null ? notification : ''}
      closeNotification={() => {
        setNotification(null);
        setWishIconClicked(false);
      }}
    >
      <>
        {user && (
          <span>
            Go to <StyledLink to="/panel">your panel</StyledLink>.
          </span>
        )}
        {!user && (
          <span>
            <StyledLink to="/login">Sign in</StyledLink>, to add to your
            favourites.
          </span>
        )}
      </>
    </NotificationBox>
  );

  return (
    <>
      <SEO
        title={`Happier - Adopt ${data.pet.name}`}
        description={`Happier is a web application supporting the process of adoption of animals from shelters. Ypu can adopt ${data.pet.name} here!`}
      />
      <Header />
      <ReturnBar />
      <StyledMainBackground>
        <PetDetails>
          <ImageWrapper>
            <PetDetailsImg
              fluid={data.pet.localImage.childImageSharp.fluid}
              alt="pet"
            />
            <WishIcon
              src={logoHappierHeart}
              title="Favorite pet"
              isClicked={isWishIconClicked}
              onClick={() => {
                setWishIconClicked(true);
                addToWatched(data.pet.id);
              }}
            />
            {isWishIconClicked && renderNotification()}
          </ImageWrapper>
          <PetDetailsDesc>
            <H1>
              {data.pet.name}
              <StyledIcon
                src={data.pet.filters.sex === 'male' ? iconMale : iconFemale}
              />
            </H1>
            <LinkWithIcon src={iconLocalization}>
              {data.pet.institution.city}, {data.pet.institution.name}
            </LinkWithIcon>
            <article>
              <H2>{data.pet.lead}</H2>
              <Paragraph>{data.pet.description}</Paragraph>
            </article>
          </PetDetailsDesc>
        </PetDetails>
        <PetFeatureSection>
          {Object.entries(data.pet.filters)
            .filter(([, value]) => !(value === null))
            .map(([key, value]) => (
              <PetFeature key={key}>{value}</PetFeature>
            ))}
        </PetFeatureSection>
      </StyledMainBackground>
      <ContactSectionWrapper>
        <ContactSection
          labelText={`Ask about ${data.pet.name}`}
          headingText={`Send a message to the ${data.pet.institution.name.toUpperCase()}`}
        />
      </ContactSectionWrapper>
      <Footer />
    </>
  );
};

export const query = graphql`
  query PetQuery($petId: String!) {
    pet(id: { eq: $petId }) {
      id
      name
      filters {
        activity
        age
        color
        bread
        place
        size
        time
        sex
      }
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
