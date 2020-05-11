import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';

const NavigationWrapper = styled.nav`
  position: fixed;
  top: -40px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  height: 430px;
  width: 100vw;
  margin: 0 auto;
  padding: 114px 30px 20px 30px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 9998;
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.6s 0.3s ease-in-out;

  ul {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: center;
  }

  li {
    list-style: none;
    color: ${({ theme }) => theme.accent};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    font-size: ${({ theme }) => theme.font.size.m};
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.grey100};
  }
`;

const MobileMenu = ({ isOpen }) => (
  <NavigationWrapper isOpen={isOpen}>
    <ul>
      <li>O programie</li>
      <li>Do adopcji</li>
      <li>Instytucje</li>
      <li>Kontakt</li>
    </ul>
    <Button secondary reverse>
      Zaloguj się
    </Button>
  </NavigationWrapper>
);

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
