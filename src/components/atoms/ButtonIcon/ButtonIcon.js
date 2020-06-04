import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonIconWrapper = styled.button`
  width: 67px;
  height: 67px;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  background-image: url(${({ icon }) => icon});
  background-position: 50% 50%;
  background-size: 60% 60%;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-bottom: 0;
  margin-right: 5vw;

  :nth-child(2) {
    background-size: 50% 50%;
  }

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.white};
  }

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 3vh;
    margin-right: 0;
  }
`;

const ButtonIconLogoWrapper = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.white};
  background-size: 80% 80%;
  background-image: url(${({ icon }) => icon});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-right: 5vw;
  margin-bottom: 5px;
  margin-left: 5px;

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 10vh;
    margin-top: 5px;
    margin-left: 0;
    margin-right: 0;
  }

  :hover {
    background-color: ${({ theme }) => theme.white};
  }
`;

const ButtonIcon = ({ logo, ...props }) => (
  <>
    {logo ? (
      <ButtonIconLogoWrapper {...props} />
    ) : (
      <ButtonIconWrapper {...props} />
    )}
  </>
);

ButtonIcon.propTypes = {
  logo: PropTypes.bool,
};

ButtonIcon.defaultProps = {
  logo: false,
};

export default ButtonIcon;
