import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon/Icon';
import iconInstagram from 'images/icon_instagram.svg';
import iconFacebook from 'images/icon_facebook.svg';
import iconLogin from 'images/icon_login.svg';

const UsefulLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 34px;
  background-color: ${({ theme }) => theme.grey100};
  padding: 0 20px;
  transform: translateY(
    ${({ isOpenMobileMenu }) => (isOpenMobileMenu ? '-100%' : '0')}
  );
  transition: transform 0.5s ease-in-out;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const IconImage = styled(Icon)`
  padding-left: 20px;
  height: 30px;
`;

const FAQLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  padding: 7px 0;
`;

const UsefulLinks = ({ isOpenMobileMenu }) => (
  <UsefulLinksWrapper isOpenMobileMenu={isOpenMobileMenu}>
    <FAQLink to="/">FAQ</FAQLink>
    <IconWrapper>
      <IconImage src={iconInstagram} />
      <IconImage src={iconFacebook} />
      <IconImage src={iconLogin} />
    </IconWrapper>
  </UsefulLinksWrapper>
);

UsefulLinks.propTypes = {
  isOpenMobileMenu: PropTypes.bool.isRequired,
};

export default UsefulLinks;
