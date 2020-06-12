/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
const React = require('react');
const FirebaseContextProvider = require('src/context/Firebase/context').default;

exports.wrapRootElement = ({ element, props }) => {
  return (
    <FirebaseContextProvider {...props}>{element}</FirebaseContextProvider>
  );
};
