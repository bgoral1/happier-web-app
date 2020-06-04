import styled from 'styled-components';

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  padding: 20px 0;
`;

export default H1;
