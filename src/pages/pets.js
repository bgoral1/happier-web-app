import React from 'react';
import SEO from 'components/molecules/SEO/seo';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Main from 'components/organisms/Main/Main';
import PetsGrid from 'components/organisms/PetsGrid/PetsGrid';

const PetsPage = () => (
  <>
    <SEO
      title="Sprawdź, psy i koty do adopcji"
      description="Chcesz adoptować pupila? W naszje bazie znajdziesz zwierzęta czekające na kochający dom!"
    />
    <MainTemplate>
      <Main />
      <PetsGrid />
    </MainTemplate>
  </>
);

export default PetsPage;
