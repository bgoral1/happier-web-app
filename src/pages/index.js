import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Main from 'components/organisms/Main/Main';
import FeaturedSection from 'components/organisms/FeaturedSection/FeaturedSection';
import AboutSection from 'components/organisms/AboutSection/AboutSection';
import StepsSection from 'components/organisms/StepsSection/StepsSection';
import MottoSection from 'components/molecules/MottoSection/MottoSection';
import InstitutionSection from 'components/organisms/InstitutionSection/InstitutionSection';

const IndexPage = () => (
  <MainTemplate>
    <Main />
    <FeaturedSection />
    <AboutSection />
    <StepsSection />
    <MottoSection />
    <InstitutionSection />
  </MainTemplate>
);

export default IndexPage;
