import React from 'react';
import styled from 'styled-components';
import Menu from 'components/molecules/Menu/Menu';

const NavigationWrapper = styled.nav`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    width: 70%;
  }
`;

const MobileMenu = () => (
  <NavigationWrapper>
    <Menu />
  </NavigationWrapper>
);

export default MobileMenu;
