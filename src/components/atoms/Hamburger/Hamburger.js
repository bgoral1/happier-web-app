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
  transition: background-color 0.25s ease-in;

  ::before,
  ::after {
    content: ' ';
    position: absolute;
    left: 0;
    width: 25px;
    height: 4px;
    background-color: ${({ theme }) => theme.accent};
    border-radius: 4px;
    transition: transform 0.25s ease-in-out;
  }

  ::before {
    top: -10px;
    transform: translateY(${({ isOpen }) => (isOpen ? '10px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }
  ::after {
    top: 10px;
    transform: translateY(${({ isOpen }) => (isOpen ? '-10px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
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
