import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHamburger = styled.button`
  border: none;
  background: none;
  padding: 15px;
  z-index: 9999;
`;

const InnerHamburger = styled.div`
  position: relative;
  width: 25px;
  height: 4px;
  background-color: ${({ theme, isOpen }) =>
    isOpen ? 'transparent' : theme.accent};
  border-radius: 4px;
  transition: transform 0.3s ease-in-out;

  ::before,
  ::after {
    content: ' ';
    position: absolute;
    left: 0;
    width: 25px;
    height: 4px;
    background-color: ${({ theme }) => theme.accent};
    border-radius: 4px;
  }

  ::before {
    top: -10px;
    transform: translateY(${({ isOpen }) => (isOpen ? '10px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
    transition: transform 0.3s 0.3s ease-in-out;
  }
  ::after {
    top: 10px;
    transform: translateY(${({ isOpen }) => (isOpen ? '-10px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
    transition: transform 0.5s 0.3s ease-in-out;
  }
`;

const Hamburger = ({ isOpen, ...props }) => (
  <StyledHamburger {...props}>
    <InnerHamburger isOpen={isOpen} />
  </StyledHamburger>
);

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Hamburger;
