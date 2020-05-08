import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  width: ${({ width }) => width || '280px'};
  height: 50px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.semiBold};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  transition: box-shadow 0.3s ease;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 140px;
      height: 36px;
      color: ${({ theme }) => theme.black};

      ${({ reverse }) =>
        reverse &&
        css`
          background-color: transparent;
          border: 2px solid ${({ theme }) => theme.secondary};
          color: ${({ theme }) => theme.secondary};
          text-transform: lowercase;

          :first-letter {
            text-transform: uppercase;
          }
        `}
    `};

  :hover {
    box-shadow: 0 10px 20px -15px #000;
  }
`;

export default Button;
