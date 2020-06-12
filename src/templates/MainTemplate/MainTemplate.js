import React from 'react';
import PropTypes from 'prop-types';
import FilterPetsContextProvider from 'context/FilterPetsContextProvider';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

const MainTemplate = ({ children }) => (
  <FilterPetsContextProvider>
    <>
      <Header />
      {children}
      <Footer />
    </>
  </FilterPetsContextProvider>
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
