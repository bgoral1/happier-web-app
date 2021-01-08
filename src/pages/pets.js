import React from 'react';
import SEO from 'components/molecules/SEO/seo';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Main from 'components/organisms/Main/Main';
import DisplayFilteredPets from 'components/organisms/DisplayFilteredPets/DisplayFilteredPets';

const PetsPage = () => (
  <>
    <SEO
      title="Find pets for adoption"
      description="You want to adopt a pet? In our base you will find animals waiting for a loving home!"
    />
    <MainTemplate>
      <Main />
      <DisplayFilteredPets />
    </MainTemplate>
  </>
);

export default PetsPage;
