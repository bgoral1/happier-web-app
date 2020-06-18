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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

MainTemplate.defaultProps = {
  children: [],
};

export default MainTemplate;
