import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  width: ${({ width }) => width || '280px'};
  height: 50px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  transition: box-shadow 0.3s ease;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 100px;
      height: 32px;
      color: ${({ theme }) => theme.black};
      font-size: 10px;
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      background-color: #e91e63;
      width: 100px;
      height: 32px;
      color: #fff;
      font-size: 10px;
    `}

    :hover {
    box-shadow: 0 10px 20px -15px #000;
  }
`;

export default Button;
