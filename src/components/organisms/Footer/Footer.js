import React from 'react';
import styled from 'styled-components';
import Logo from 'components/atoms/Logo/Logo';

const FooterWrapper = styled.div`
  width: 100%;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.secondary};
`;

const Footer = () => (
  <FooterWrapper>
    <Logo />
  </FooterWrapper>
);

export default Footer;
