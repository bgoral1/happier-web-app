/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
const React = require('react');
const GlobalContextProvider = require('src/context/GlobalContextProvider/GlobalContextProvider').default;

exports.wrapRootElement = ({ element, props }) => {
  return (
    <GlobalContextProvider {...props}>{element}</GlobalContextProvider>
  );
};
