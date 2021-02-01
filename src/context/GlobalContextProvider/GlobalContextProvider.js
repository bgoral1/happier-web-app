import React from 'react';
import PropTypes from 'prop-types';
import FirebaseContextProvider from 'context/Firebase/context';
import FilterPetsContext from 'context/FilterPetsContext/FilterPetsContext';

const GlobalContextProvider = ({ children }) => (
  <FirebaseContextProvider>
    <FilterPetsContext>{children}</FilterPetsContext>
  </FirebaseContextProvider>
);

GlobalContextProvider.propTypes = {
  children: PropTypes.node,
};

GlobalContextProvider.defaultProps = {
  children: null,
};

export default GlobalContextProvider;
