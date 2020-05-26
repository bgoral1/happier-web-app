import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};

  ${({ white }) =>
    white &&
    css`
      color: ${({ theme }) => theme.white};
    `}
`;

export default Heading;
