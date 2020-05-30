import React from 'react';
import styled from 'styled-components';
import LinkWithIcon from 'components/atoms/LinkWithIcon/LinkWithIcon';
import iconArrow from 'images/icons/icon_arrow.svg';

const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  width: 100%;
  height: 55px;
  margin-top: 73px;

  ${({ theme }) => theme.mq.desktop} {
    padding-left: 50px;
  }
`;

const StyledLinkWithIcon = styled(LinkWithIcon)`
  color: ${({ theme }) => theme.white};
  p {
    display: inline-block;
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.size.s};
  }
  svg {
    transform: rotate(90deg);
    path {
      fill: ${({ theme }) => theme.white};
    }
  }
`;

const ReturnBar = () => (
  <BarWrapper>
    <StyledLinkWithIcon to="/pets" src={iconArrow}>
      Wróć do wyszukiwania
    </StyledLinkWithIcon>
  </BarWrapper>
);

export default ReturnBar;
