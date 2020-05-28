import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  font-size: ${({ theme }) => theme.font.weight.light};
`;

export default Paragraph;
