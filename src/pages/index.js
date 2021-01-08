import React from 'react';
import SEO from 'components/molecules/SEO/seo';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Main from 'components/organisms/Main/Main';
import Button from 'components/atoms/Button/Button';
import FeaturedSection from 'components/organisms/FeaturedSection/FeaturedSection';
import AboutSection from 'components/organisms/AboutSection/AboutSection';
import StepsSection from 'components/organisms/StepsSection/StepsSection';
import MottoSection from 'components/molecules/MottoSection/MottoSection';
import InstitutionSection from 'components/organisms/InstitutionSection/InstitutionSection';

const IndexPage = () => (
  <>
    <SEO
      title="Happier home page"
      description="Happier is a web application supporting the process of adoption of animals from shelters."
    />
    <MainTemplate>
      <Main indexPage="true">
        <Button type="submit" value="Submit">
          Search
        </Button>
      </Main>
      <FeaturedSection />
      <AboutSection />
      <StepsSection />
      <MottoSection />
      <InstitutionSection />
    </MainTemplate>
  </>
);
export default IndexPage;
