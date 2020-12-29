import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import AboutProgram from 'components/molecules/AboutProgram/AboutProgram';
import Logo from 'components/atoms/Logo/Logo';
import pawsImg from 'images/paws.svg';

const AboutSectionWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.gray100};
  padding: 32px 31px 39px 31px;
  position: relative;

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    margin: 0 auto;
  }
`;

const HandImg = styled(Image)`
  text-align: center;
  position: absolute !important;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  height: 150px;
  width: 214px;

  ${({ theme }) => theme.mq.tablet} {
    left: 80%;
    height: 175px;
    width: 250px;
  }
`;

const AboutProgramWrappper = styled(AboutProgram)`
  margin-top: 113px;

  ${({ theme }) => theme.mq.tablet} {
    width: 70%;
    margin: 20px auto;

    :before {
      content: '';
      position: absolute;
      left: 10px;
      bottom: -40px;
      width: 260px;
      height: 228px;
      background-image: url(${pawsImg});
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 100%;
    }
  }
`;

const StyledLogo = styled(Logo)`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }
`;

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "hand" }) {
        childImageSharp {
          fluid(maxHeight: 175, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return (
    <AboutSectionWrapper id="about">
      <StyledLogo />
      <HandImg
        fluid={data.file.childImageSharp.fluid}
        alt="Human and dog holding hands"
      />
      <AboutProgramWrappper />
    </AboutSectionWrapper>
  );
};

export default AboutSection;
