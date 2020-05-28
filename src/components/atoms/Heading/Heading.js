import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  padding: 20px 0;

  ${({ white }) =>
    white &&
    css`
      color: ${({ theme }) => theme.white};
    `}
`;

export default Heading;
