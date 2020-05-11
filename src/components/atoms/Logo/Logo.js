import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from 'images/logo_happier_default.svg';

const LogoLink = styled(Link)`
  display: block;
  width: 176px;
  height: 50px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  z-index: 9999;
`;

export default LogoLink;
