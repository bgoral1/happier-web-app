/* eslint-disable react/prop-types */
import React from 'react';
import FirebaseContextProvider from 'context/Firebase/context';
import FilterPetsContext from 'context/FilterPetsContext/FilterPetsContext';

const GlobalContextProvider = ({ children }) => (
  <FirebaseContextProvider>
    <FilterPetsContext>{children}</FilterPetsContext>
  </FirebaseContextProvider>
);

export default GlobalContextProvider;
