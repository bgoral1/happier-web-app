import React from 'react';

import styled from 'styled-components';

const NavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Montserrat';
`;

const Navigation = () => (
  <NavigationWrapper>
    <span>happier</span>
    <ul>
      <li>O programie</li>
      <li>Do adopcji</li>
      <li>Instytucje</li>
      <li>Kontakt</li>
    </ul>
  </NavigationWrapper>
);

export default Navigation;
