import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import UsefulLinks from 'components/molecules/UsefulLinks/UsefulLinks';
import Logo from 'components/atoms/Logo/Logo';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import MobileMenu from 'components/molecules/MobileMenu/MobileMenu';
import BookmarksBar from 'components/molecules/BookmarksBar/BookmarksBar';

const StyledWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  position: absolute;
  top: 34;
  left: 0;
  transform: translateY(${({ isOpen }) => (isOpen ? '-34px' : '0')});
  background-color: ${({ theme }) => theme.white};
`;

const LogoLink = styled(Link)`
  z-index: 9999;
`;

const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <>
      <UsefulLinks isOpenMobileMenu={isMenuOpen} />
      <StyledWrapper isOpen={isMenuOpen}>
        <LogoLink to="/">
          <Logo width="176px" height="50px" />
        </LogoLink>
        <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
        <MobileMenu isOpen={isMenuOpen} />
      </StyledWrapper>
      <BookmarksBar />
    </>
  );
};

export default Header;
