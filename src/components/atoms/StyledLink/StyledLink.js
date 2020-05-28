import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  :hover,
  :focus {
    color: ${({ theme }) => theme.primary};

    path {
      fill: ${({ theme }) => theme.primary};
    }
  }

  ${({ white }) =>
    white &&
    css`
      color: ${({ theme }) => theme.white};
    `}
`;

export default StyledLink;
