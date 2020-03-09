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
    background-color: #E6E6E6;
    width: 100px;
    height: 32px;
  
  `)}
`;

export default Button;
