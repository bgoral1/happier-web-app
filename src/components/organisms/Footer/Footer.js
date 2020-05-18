import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from 'components/atoms/Logo/Logo';
import Icon from 'components/atoms/Icon/Icon';
import iconInstagram from 'images/icons/icon_instagram.svg';
import iconFacebook from 'images/icons/icon_facebook.svg';

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

const FooterRowrapper = styled.div`
  display: flex;
  padding-top: 22px;
  flex-wrap: wrap;
  max-width: 320px;
  justify-content: center;

  ${({ theme }) => theme.mq.tablet} {
    max-width: 1000px;
  }
`;

const IconImage = styled(Icon)`
  fill: ${({ theme }) => theme.primary};

  :first-of-type {
    margin-right: 20px;
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.white};

  :first-of-type {
    padding-right: 16px;
    border-right: 2px solid ${({ theme }) => theme.white};
  }

  :last-of-type {
    margin-left: 16px;
  }

  ${({ theme }) => theme.mq.tablet} {
    :nth-child(1) {
      order: 2;
      margin-left: 16px;
    }
    :nth-child(2) {
      order: 3;
    }
    :nth-child(3) {
      order: 1;
    }
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.primary};
  padding-top: 22px;

  ${({ theme }) => theme.mq.tablet} {
    padding-top: 0;
    color: ${({ theme }) => theme.white};
  }
`;

const Footer = () => (
  <FooterWrapper>
    <Logo shadowed />
    <FooterRowrapper>
      <IconImage to="/" src={iconInstagram} />
      <IconImage to="/" src={iconFacebook} />
    </FooterRowrapper>
    <FooterRowrapper>
      <FooterLink to="/">Regulamin</FooterLink>
      <FooterLink to="/">Polityka prywatności</FooterLink>
      <FooterText>© 2020 Happier. All rights reserved</FooterText>
    </FooterRowrapper>
  </FooterWrapper>
);

export default Footer;
