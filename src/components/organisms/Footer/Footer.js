import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from 'components/atoms/Logo/Logo';
import Icon from 'components/atoms/Icon/Icon';
import iconInstagram from 'images/icon_instagram.svg';
import iconFacebook from 'images/icon_facebook.svg';

const FooterWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  padding-top: 22px;
  padding-bottom: 13px;
  justify-content: space-between;
  width: 70px;
`;

const IconImage = styled(Icon)`
  fill: ${({ theme }) => theme.primary};
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  padding-top: 22px;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.primary};
  padding-top: 26px;
`;

const Footer = () => (
  <FooterWrapper>
    <Logo shadowed />
    <SocialIconsWrapper>
      <IconImage src={iconInstagram} />
      <IconImage src={iconFacebook} />
    </SocialIconsWrapper>
    <FooterLink to="/">Regulamin</FooterLink>
    <FooterLink to="/">Polityka prywatności</FooterLink>
    <FooterText>© 2020 Happier. All rights reserved</FooterText>
  </FooterWrapper>
);

export default Footer;
