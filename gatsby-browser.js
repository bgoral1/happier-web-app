/* eslint-disable react/prop-types */
import React from 'react';
import GlobalContextProvider from 'src/context/GlobalContextProvider';

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
