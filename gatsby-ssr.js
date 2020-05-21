/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
const React = require('react');
const GlobalContextProvider = require('src/context/GlobalContextProvider')
  .default;

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
