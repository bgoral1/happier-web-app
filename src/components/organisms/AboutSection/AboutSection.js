import React from 'react';
import styled from 'styled-components';
import AboutProgram from 'components/molecules/AboutProgram/AboutProgram';
import Hand from 'images/hand.png';

const AboutSectionWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.grey100};
  padding: 32px 31px 39px 31px;
  position: relative;

  img {
    text-align: center;
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
`;

const AboutProgramWrappper = styled(AboutProgram)`
  margin-top: 113px;
`;

const AboutSection = () => (
  <AboutSectionWrapper>
    <img src={Hand} alt="Hand" height="150px" width="auto" />
    <AboutProgramWrappper />
  </AboutSectionWrapper>
);

export default AboutSection;
