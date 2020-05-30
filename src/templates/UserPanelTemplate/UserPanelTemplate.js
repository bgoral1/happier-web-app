import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPanelTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);

UserPanelTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

UserPanelTemplate.defaultProps = {
  children: [],
};

export default UserPanelTemplate;
