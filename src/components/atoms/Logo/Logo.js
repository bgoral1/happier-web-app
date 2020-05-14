import styled from 'styled-components';
import logo from 'images/logo_happier_default.svg';

const Logo = styled.div`
  display: block;
  width: ${({ width }) => width || '232px'};
  height: ${({ height }) => height || '65px'};
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  z-index: 9999;
`;

export default Logo;
