import React from 'react';
import SEO from 'components/molecules/SEO/seo';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Main from 'components/organisms/Main/Main';
import DisplayFilteredPets from 'components/organisms/DisplayFilteredPets/DisplayFilteredPets';

const PetsPage = () => (
  <>
    <SEO
      title="Sprawdź, psy i koty do adopcji"
      description="Chcesz adoptować pupila? W naszje bazie znajdziesz zwierzęta czekające na kochający dom!"
    />
    <MainTemplate>
      <Main />
      <DisplayFilteredPets />
    </MainTemplate>
  </>
);

export default PetsPage;
