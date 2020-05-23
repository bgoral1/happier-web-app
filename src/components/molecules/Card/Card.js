import React from 'react';
import styled from 'styled-components';
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

  img {
    width: 100%;
  }
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

const Card = () => (
  <StyledWrapper>
    <ImageWrapper>
      <img src="http://unsplash.it/200/200" alt="dog" />
      <StyledButton width="100px" height="32px">
        Zobacz
      </StyledButton>
    </ImageWrapper>
    <HeadingWrapper>
      <h2>Rudolf</h2>
    </HeadingWrapper>
  </StyledWrapper>
);

export default Card;
