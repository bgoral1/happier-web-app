import React, { useState, useContext } from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import UsefulLinks from 'components/molecules/UsefulLinks/UsefulLinks';
import Logo from 'components/atoms/Logo/Logo';
import Hamburger from 'components/atoms/Hamburger/Hamburger';
import DesktopMenu from 'components/molecules/DesktopMenu/DesktopMenu';
import MobileMenu from 'components/molecules/MobileMenu/MobileMenu';
import LinkWithIcon from 'components/atoms/LinkWithIcon/LinkWithIcon';
import iconLogin from 'images/icons/icon_login.svg';
import iconLogout from 'images/icons/icon_logout.svg';
import Button from 'components/atoms/Button/Button';
import { FirebaseContext } from 'context/Firebase/context';

const StyledWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  position: absolute;
  top: 34px;
  left: 0;
  z-index: 9998;
  transform: translateY(${({ isOpen }) => (isOpen ? '-34px' : '0')});
  background-color: ${({ theme }) => theme.white};

  ${({ theme }) => theme.mq.large} {
    padding-left: 82px;
    padding-right: 82px;
  }
`;

const LogoLink = styled(Link)`
  z-index: 9999;
`;

const UserInfo = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;

  span {
    display: none;
    ${({ theme }) => theme.mq.tablet} {
      display: inline;
      padding-right: 8px;
    }
  }

  strong {
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: 1.4rem;
    text-transform: capitalize;
  }

  a {
    padding-left: 15px;
    color: ${({ theme }) => theme.secondary};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};

    :hover {
      color: ${({ theme }) => theme.primaryDark};
    }
  }

  div {
    :hover {
      color: ${({ theme }) => theme.primaryDark};
      cursor: pointer;
      fill: ${({ theme }) => theme.primaryDark};
    }
  }
`;

const StyledButton = styled(Button)`
  text-align: center;
  line-height: 1.8;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.secondary};
  text-transform: lowercase;
  width: 140px;
  height: 36px;
  color: ${({ theme }) => theme.black};
  border-radius: 50px;

  :first-letter {
    text-transform: uppercase;
  }
`;

const Header = () => {
  const { firebase, user } = useContext(FirebaseContext);

  const [isMenuOpen, setMenuState] = useState(false);

  const handleLogoutClick = () => {
    firebase.logout().then(() => navigate('/login'));
  };

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <>
      <UsefulLinks isOpenMobileMenu={isMenuOpen}>
        {!!user && !!user.email && (
          <UserInfo>
            <span>Hi, </span>
            <strong>{user.userName || user.email}</strong>
            <Link to="/panel">Panel</Link>
            <LinkWithIcon src={iconLogout} onClick={handleLogoutClick}>
              Sign out
            </LinkWithIcon>
          </UserInfo>
        )}
        {(!user || !user.email) && (
          <LinkWithIcon to="/login" src={iconLogin}>
            Sign in
          </LinkWithIcon>
        )}
      </UsefulLinks>
      <StyledWrapper isOpen={isMenuOpen}>
        <LogoLink to="/">
          <Logo width="176px" height="50px" />
        </LogoLink>
        <DesktopMenu />
        <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
        <MobileMenu isOpen={isMenuOpen}>
          {!!user && !!user.email && (
            <StyledButton as={Link} to="/login" onClick={handleLogoutClick}>
              Sign out
            </StyledButton>
          )}
          {(!user || !user.email) && (
            <StyledButton as={Link} to="/login">
              Sign in
            </StyledButton>
          )}
        </MobileMenu>
      </StyledWrapper>
    </>
  );
};

export default Header;
