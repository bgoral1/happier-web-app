import styled, { css } from 'styled-components';
import iconSearch from 'images/icons/icon_search.svg';

const Input = styled.input`
  padding: 15px 30px;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  background-color: ${({ theme }) => theme.gray100};
  border: none;
  border-radius: 50px;
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => theme.gray500};
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10 px 40px;
      background-image: url(${iconSearch});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;
