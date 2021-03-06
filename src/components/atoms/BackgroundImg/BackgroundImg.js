import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const BackgroundImgWrappper = styled(Image)`
  display: none;
  width: 100%;
  height: 428px;
  z-index: -1;
  position: absolute !important;
  top: 162px;
  left: 0;

  ${({ theme }) => theme.mq.large} {
    height: 550px;
    display: block;
  }
`;

const BackgroundImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "bcg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <BackgroundImgWrappper
      fluid={data.file.childImageSharp.fluid}
      role="img"
      aria-label="Puppies in a box"
    />
  );
};

export default BackgroundImg;
