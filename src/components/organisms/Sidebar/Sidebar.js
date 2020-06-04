import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logoHeart from 'images/logo_happier_heart.svg';
import iconPaw from 'images/icons/icon_paw.svg';
import iconAdd from 'images/icons/icon_add.svg';
import iconLogout from 'images/icons/icon_logout.svg';

const SidebarWrapper = styled.div`
  width: 100vw;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;

  ${({ theme }) => theme.mq.tablet} {
    width: 100px;
    height: 100vh;
    bottom: auto;
    top: 0;
    flex-direction: column;
  }

  button:last-of-type {
    margin-top: 0;
    background-size: 70% 70%;

    ${({ theme }) => theme.mq.tablet} {
      margin-top: auto;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: space-between;

    ${({ theme }) => theme.mq.tablet} {
      flex-direction: column;
    }
  }
`;

// eslint-disable-next-line react/prop-types
const Sidebar = ({ handleLogoutClick }) => (
  <SidebarWrapper>
    <ButtonIcon
      logo
      icon={logoHeart}
      as={Link}
      to="/"
      title="Przejdź do strony głównej"
    />
    <div>
      <ButtonIcon icon={iconPaw} title="Pupile" as={Link} to="/panel" />
      <ButtonIcon
        icon={iconAdd}
        title="Dodaj pupila do adopcji"
        as={Link}
        to="/panel/add-pet"
      />
    </div>
    <ButtonIcon
      icon={iconLogout}
      onClick={handleLogoutClick}
      title="Wyloguj się"
    />
  </SidebarWrapper>
);

export default Sidebar;
