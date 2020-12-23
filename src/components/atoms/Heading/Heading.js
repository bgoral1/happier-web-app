import styled from 'styled-components';
import H1 from 'components/atoms/H1/H1';

const Heading = styled(H1)`
  padding: 15px 0 10px 20px;
  ${({ theme }) => theme.mq.tablet} {
    margin-left: 110px;
    padding-left: 0;
  }
`;

export default Heading;
