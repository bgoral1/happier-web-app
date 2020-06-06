import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Main from 'components/organisms/Main/Main';
import PetsGrid from 'components/organisms/PetsGrid/PetsGrid';

const PetsPage = () => (
  <MainTemplate>
    <Main />
    <PetsGrid />
  </MainTemplate>
);

export default PetsPage;
