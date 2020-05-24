import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  box-shadow: 0 7px 12px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  overflow: hidden;
  /* min-height: 390px;
  width: 350px; */
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  padding: 20px;
  position: relative;
  width: 320px;
  height: 320px;
`;

const PetImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 0;
`;

const StyledButton = styled(Button)`
  position: absolute;
  right: 22px;
  bottom: -16px;
  font-size: ${({ theme }) => theme.font.size.xxs};
`;

const HeadingWrapper = styled.div`
  padding: 24px 0px;
  text-align: center;
`;

const Card = ({ name, petImage }) => (
  <StyledWrapper>
    <ImageWrapper>
      <PetImg fluid={petImage} alt="dog" />
      <StyledButton width="100px" height="32px">
        Zobacz
      </StyledButton>
    </ImageWrapper>
    <HeadingWrapper>
      <h2>{name}</h2>
    </HeadingWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  petImage: PropTypes.string.isRequired,
};

export default Card;
