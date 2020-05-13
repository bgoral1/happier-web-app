import React from 'react';
import styled from 'styled-components';
import bearBcg from 'images/bear_background.png';
import quote from 'images/icon_quote.svg';

const MottoSectionWrapper = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${bearBcg});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Motto = styled.p`
  font-size: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 30px;
  position: relative;

  ::before,
  ::after {
    content: url(${quote});
    position: absolute;
  }

  ::before {
    bottom: 10px;
    left: 20px;
  }

  ::after {
    top: 10px;
    right: 20px;
  }
`;

const MottoSection = () => (
  <MottoSectionWrapper>
    <Motto>
      Szczęście to jedyna rzecz, która się mnoży, gdy się ją dzieli.
    </Motto>
  </MottoSectionWrapper>
);

export default MottoSection;
