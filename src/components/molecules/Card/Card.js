import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import Image from 'gatsby-image';
import Button from 'components/atoms/Button/Button';
import Icon from 'components/atoms/Icon/Icon';
import iconMale from 'images/icons/icon_sexMale.svg';
import iconFemale from 'images/icons/icon_sexFemale.svg';

export const zoom = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.25);
  }
`;

const StyledWrapper = styled.div`
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  overflow: hidden;

  :hover div img {
    animation: ${zoom} 1s ease-in-out forwards;
  }

  :hover {
    box-shadow: 0 7px 12px rgba(0, 0, 0, 0.3);
  }
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 20px;
  position: relative;
`;

const PetImg = styled(Image)`
  @media (max-width: 359px) {
    width: 240px;
    height: 240px;
  }
  width: 280px;
  height: 280px;
  object-fit: cover;
  object-position: 50% 0;
  margin: 0 auto;

  ${({ theme }) => theme.mq.tablet} {
    width: 190px;
    height: 190px;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 200px;
    height: 200px;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  right: 22px;
  bottom: -32px;
  font-size: ${({ theme }) => theme.font.size.xxs};
`;

const HeadingWrapper = styled.div`
  padding: 24px 0px;
  text-align: center;
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.grey900};
`;

const StyledIcon = styled(Icon)`
  margin-left: 15px;
  display: inline-block;

  svg {
    height: 35px;
  }
`;

// eslint-disable-next-line react/prop-types
const Card = ({ name, sex, petImage, children, linkTo }) => (
  <StyledWrapper>
    <ImageWrapper>
      {children}
      {<PetImg fluid={petImage} alt="pet" />}
      <Link key={linkTo} to={`/pet/${linkTo}`}>
        <StyledButton width="100px" height="32px">
          Zobacz
        </StyledButton>
      </Link>
    </ImageWrapper>
    <HeadingWrapper>
      <H2>
        {name}
        <StyledIcon src={sex === 'samiec' ? iconMale : iconFemale} />
      </H2>
    </HeadingWrapper>
  </StyledWrapper>
);

const fluidObject = PropTypes.shape({
  aspectRatio: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  base64: PropTypes.string,
  tracedSVG: PropTypes.string,
  srcWebp: PropTypes.string,
  srcSetWebp: PropTypes.string,
  media: PropTypes.string,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
});

Card.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  petImage: PropTypes.oneOfType([fluidObject, PropTypes.arrayOf(fluidObject)]),
  linkTo: PropTypes.string.isRequired,
};

Card.defaultProps = {
  petImage: [],
  // eslint-disable-next-line react/default-props-match-prop-types
  children: null,
};

export default Card;
