import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import logoHeart from 'images/logo_happier_heart.svg';
import iconPaw from 'images/icons/icon_paw.svg';
import iconAdd from 'images/icons/icon_add.svg';
import iconLogout from 'images/icons/icon_logout.svg';

const SidebarWrapper = styled.div`
  width: 100px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button:last-of-type {
    margin-top: auto;
    background-size: 80% 80%;
  }

  div {
    display: flex;
    flex-direction: column;

    button:nth-child(2) {
      background-size: 45% 45%;
    }
  }
`;

const Sidebar = () => (
  <SidebarWrapper>
    <ButtonIcon
      logo
      icon={logoHeart}
      as={Link}
      to="/"
      title="Przejdź do strony głównej"
    />
    <div>
      <ButtonIcon icon={iconPaw} active title="Zarządzaj pupilami" />
      <ButtonIcon icon={iconAdd} title="Dodaj pupila do adopcji" />
    </div>
    <ButtonIcon icon={iconLogout} title="Wyloguj się" />
  </SidebarWrapper>
);

export default Sidebar;
