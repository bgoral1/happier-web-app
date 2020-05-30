import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  border-radius: 20px;
  border: none;
  background-color: transparent;
  background-image: url(${({ icon }) => icon});
  background-position: 50% 50%;
  background-size: 60% 60%;
  background-repeat: no-repeat;
  cursor: pointer;
  margin-bottom: 3vh;

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.white};
    `}

  ${({ logo }) =>
    logo &&
    css`
      width: 90px;
      height: 90px;
      border-radius: 5px;
      background-color: ${({ theme }) => theme.white};
      background-size: 80% 80%;
      margin-bottom: 10vh;
      margin-top: 5px;
    `}
`;

export default ButtonIcon;
