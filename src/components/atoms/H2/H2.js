import styled from 'styled-components';

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  padding: 20px 0;
`;

export default H2;
