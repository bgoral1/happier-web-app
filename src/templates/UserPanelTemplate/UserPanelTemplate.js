import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
import { FirebaseContext } from 'context/Firebase/context';

const UserPanelTemplate = ({ children }) => {
  const { firebase } = useContext(FirebaseContext);

  const handleLogoutClick = () => {
    firebase.logout();
    navigate('/login');
  };

  return (
    <>
      <Sidebar handleLogoutClick={handleLogoutClick} />
      {children}
    </>
  );
};

UserPanelTemplate.propTypes = {
  children: PropTypes.node,
};

UserPanelTemplate.defaultProps = {
  children: null,
};

export default UserPanelTemplate;
