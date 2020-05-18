import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const BackgroundImgWrappper = styled(Image)`
  display: none;
  width: 100%;
  height: 428px;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  z-index: -1;
  position: absolute !important;
  top: 162px;
  left: 0;

  ${({ theme }) => theme.mq.desktop} {
    display: block;
  }
`;

const BackgroundImg = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "bcg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return <BackgroundImgWrappper fluid={data.file.childImageSharp.fluid} />;
};

export default BackgroundImg;
