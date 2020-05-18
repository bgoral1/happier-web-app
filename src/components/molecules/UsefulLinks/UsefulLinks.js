import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import LinkWithIcon from 'components/atoms/LinkWithIcon/LinkWithIcon';
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

  ${({ theme }) => theme.mq.large} {
    padding-right: 82px;
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

const UsefulLinks = ({ isOpenMobileMenu }) => (
  <UsefulLinksWrapper isOpenMobileMenu={isOpenMobileMenu}>
    <FAQLink to="/">FAQ</FAQLink>
    <IconWrapper>
      <a href="https://www.instagram.com/">
        <LinkWithIcon src={iconInstagram} />
      </a>
      <a href="https://www.facebook.com/">
        <LinkWithIcon src={iconFacebook} />
      </a>
      <LinkWithIcon to="/" src={iconLogin}>
        Zaloguj się
      </LinkWithIcon>
    </IconWrapper>
  </UsefulLinksWrapper>
);

UsefulLinks.propTypes = {
  isOpenMobileMenu: PropTypes.bool.isRequired,
};

export default UsefulLinks;
