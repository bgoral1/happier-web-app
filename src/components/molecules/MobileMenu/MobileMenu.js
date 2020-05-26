import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Menu from 'components/molecules/Menu/Menu';
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
  width: 100%;
  margin: 0 auto;
  padding: 114px 30px 20px 30px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  z-index: 9998;
  transform: translateY(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.6s 0.3s ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

const StyledButton = styled(Button)`
  text-align: center;
  line-height: 1.6;
`;

const MobileMenu = ({ isOpen }) => (
  <NavigationWrapper isOpen={isOpen}>
    <Menu />
    <StyledButton as={Link} to="/login" secondary reverse>
      Zaloguj się
    </StyledButton>
    {/* {!!user && !!user.email && (
      <StyledButton as={Link} to="/login" secondary reverse>
        Wyloguj się
      </StyledButton>
    )}
    {(!user || !user.email) && (
      <StyledButton as={Link} to="/login" secondary reverse>
        Zaloguj się
      </StyledButton>
    )} */}
  </NavigationWrapper>
);

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
