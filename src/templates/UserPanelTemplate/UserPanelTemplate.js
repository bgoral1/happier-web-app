import React from 'react';
import PropTypes from 'prop-types';
import FilterPetsContextProvider from 'src/context/FilterPetsContextProvider';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPanelTemplate = ({ children }) => (
  <FilterPetsContextProvider>
    <>
      <Sidebar />
      {children}
    </>
  </FilterPetsContextProvider>
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
