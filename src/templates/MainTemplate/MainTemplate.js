import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
// import SEO from 'components/SEO/seo';
import Header from 'components/organisms/Header/Header';
import Main from 'components/organisms/Main/Main';
import FeaturedSection from 'components/organisms/FeaturedSection/FeaturedSection';
import AboutSection from 'components/organisms/AboutSection/AboutSection';
import StepsSection from 'components/organisms/StepsSection/StepsSection';
import MottoSection from 'components/molecules/MottoSection/MottoSection';

const MainTemplate = ({ children }) => (
  <>
    {/* <SEO /> */}
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Main />
        <FeaturedSection />
        <AboutSection />
        <StepsSection />
        <MottoSection />
        {children}
      </>
    </ThemeProvider>
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
