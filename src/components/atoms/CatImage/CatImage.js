import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const CatImg = styled(Image)`
  width: 500px;
  height: 284px;
  position: absolute !important;
  bottom: -30px;
  right: 5px;
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    display: block;
  }
`;

const CatImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "catMain" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  return <CatImg fluid={data.file.childImageSharp.fluid} alt="Cat" />;
};

export default CatImage;
