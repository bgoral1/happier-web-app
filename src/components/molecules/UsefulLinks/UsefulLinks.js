import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon/Icon';
import iconInstagram from 'images/icons/icon_instagram.svg';
import iconFacebook from 'images/icons/icon_facebook.svg';
import iconLogin from 'images/icons/icon_login.svg';

const UsefulLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 34px;
  background-color: ${({ theme }) => theme.grey100};
  padding: 0 20px;
  transform: translateY(
    ${({ isOpenMobileMenu }) => (isOpenMobileMenu ? '-100%' : '0')}
  );
  transition: transform 0.5s ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    justify-content: flex-end;
  }
`;

const FAQLink = styled(Link)`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  padding: 7px 0px;
  ${({ theme }) => theme.mq.desktop} {
    margin-left: 35px;
    order: 2;
  }
`;

const IconWrapper = styled.div`
  display: flex;
`;

const IconImage = styled(Icon)`
  margin-left: 20px;
  height: 30px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.black};

  p {
    display: none;
    font-weight: ${({ theme }) => theme.font.weight.semiBold};

    ${({ theme }) => theme.mq.desktop} {
      display: inline-block;
    }
  }
`;

const UsefulLinks = ({ isOpenMobileMenu }) => (
  <UsefulLinksWrapper isOpenMobileMenu={isOpenMobileMenu}>
    <FAQLink to="/">FAQ</FAQLink>
    <IconWrapper>
      <a href="https://www.instagram.com/">
        <IconImage src={iconInstagram} />
      </a>
      <a href="https://www.facebook.com/">
        <IconImage src={iconFacebook} />
      </a>
      <IconImage to="/" src={iconLogin}>
        Zaloguj się
      </IconImage>
    </IconWrapper>
  </UsefulLinksWrapper>
);

UsefulLinks.propTypes = {
  isOpenMobileMenu: PropTypes.bool.isRequired,
};

export default UsefulLinks;
