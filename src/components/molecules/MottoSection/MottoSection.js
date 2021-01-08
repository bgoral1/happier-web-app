import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import quote from 'images/icons/icon_quote.svg';

const MottoSectionWrapper = styled(BackgroundImage)`
  @media (max-width: 360px) {
    height: 260px;
  }
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    height: 400px;
  }

  ${({ theme }) => theme.mq.large} {
    height: 460px;
  }
`;

const Motto = styled.figure`
  color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-align: center;
  padding: 30px;
  position: relative;

  figcaption {
    font-size: ${({ theme }) => theme.font.size.xxs};
    padding-top: 10px;
    font-weight: ${({ theme }) => theme.font.weight.normal};
  }

  ${({ theme }) => theme.mq.tablet} {
    max-width: 60%;
    font-size: ${({ theme }) => theme.font.size.m};

    figcaption {
      font-size: ${({ theme }) => theme.font.size.xs};
    }
  }

  ${({ theme }) => theme.mq.large} {
    font-size: ${({ theme }) => theme.font.size.l};

    figcaption {
      font-size: ${({ theme }) => theme.font.size.s};
    }
  }

  blockquote {
    line-height: 1.5;

    ::before,
    ::after {
      content: '';
      background-image: url(${quote});
      background-repeat: no-repeat;
      background-size: cover;
      width: 40px;
      height: 30px;
      position: absolute;

      ${({ theme }) => theme.mq.desktop} {
        width: 46px;
        height: 35px;
      }
    }

    ::before {
      bottom: 10px;
      left: 10px;

      ${({ theme }) => theme.mq.desktop} {
        left: -30px;
      }
    }

    ::after {
      top: 0px;
      right: 10px;

      ${({ theme }) => theme.mq.desktop} {
        right: -30px;
      }
    }
  }
`;

const MottoSection = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "mottoBcg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <MottoSectionWrapper
      fluid={data.file.childImageSharp.fluid}
      role="img"
      aria-label="Puppies"
    >
      <Motto>
        <blockquote>
          Happiness is the only thing that multiplies if you share it.
        </blockquote>
        <figcaption>Albert Schweitzer</figcaption>
      </Motto>
    </MottoSectionWrapper>
  );
};

export default MottoSection;
