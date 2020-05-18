import styled from 'styled-components';
import Icon from 'components/atoms/Icon/Icon';

const LinkWithIcon = styled(Icon)`
  margin-left: 20px;
  height: 30px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.black};

  p {
    display: none;
    padding-left: 5px;
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    font-size: ${({ theme }) => theme.font.size.xs};

    ${({ theme }) => theme.mq.desktop} {
      display: inline-block;
    }
  }
`;
export default LinkWithIcon;
