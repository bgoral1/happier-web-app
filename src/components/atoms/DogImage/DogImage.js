import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const DogImg = styled(Image)`
  width: 330px;
  height: 251px;
  position: absolute !important;
  bottom: -25px;
  left: 5px;
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    display: block;
  }
`;

const DogImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "dogMain" }) {
        childImageSharp {
          fluid(maxWidth: 330, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return <DogImg fluid={data.file.childImageSharp.fluid} alt="Pies" />;
};

export default DogImage;
