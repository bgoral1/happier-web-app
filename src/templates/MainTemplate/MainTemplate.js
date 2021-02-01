import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

const MainTemplate = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.node,
};

MainTemplate.defaultProps = {
  children: null,
};

export default MainTemplate;
