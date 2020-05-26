import styled, { css } from 'styled-components';
import iconSearch from 'images/icons/icon_search.svg';

const Input = styled.input`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 50px;

  ::placeholder {
    color: ${({ theme }) => theme.grey500};
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
