import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #e91e63;
  width: 280px;
  height: 50px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;

  ${({ secondary }) => secondary && css`
  
  
  `)}
`;

export default Button;
