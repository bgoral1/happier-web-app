import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FirebaseContext } from 'context/Firebase/context';
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

const Sidebar = ({ handleLogoutClick }) => {
  const { user } = useContext(FirebaseContext);

  return (
    <SidebarWrapper>
      <ButtonIcon
        logo
        icon={logoHeart}
        as={Link}
        to="/"
        title="Go to the home page"
      />
      {user !== null && (
        <>
          {user.isInstitution && (
            <div>
              <ButtonIcon icon={iconPaw} title="Pets" as={Link} to="/panel" />
              <ButtonIcon
                icon={iconAdd}
                title="Add pet for adoption"
                as={Link}
                to="/panel/add-pet"
              />
            </div>
          )}
        </>
      )}
      <ButtonIcon
        icon={iconLogout}
        onClick={handleLogoutClick}
        title="Sign out"
      />
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  handleLogoutClick: PropTypes.func.isRequired,
};

export default Sidebar;
