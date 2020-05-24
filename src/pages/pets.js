/* eslint-disable react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Card from 'components/molecules/Card/Card';

const PetsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.white};

  h1 {
    width: 100%;
    text-align: center;
  }

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'header header header';

    h1 {
      grid-area: header;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    margin: 0 auto;
    padding: 50px;
    box-shadow: 0 7px 12px rgba(0, 0, 0, 0.1);
  }

  ${({ theme }) => theme.mq.large} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'header header header header';
    padding: 30px;
  }
`;

const PetsPage = ({ data }) => (
  <MainTemplate>
    <PetsWrapper>
      <h1>Do adopcji</h1>
      {data.allPet.edges.map(edge => (
        <Link key={edge.node.id} to={`/pet/${edge.node.id}`}>
          <Card
            petImage={edge.node.localImage.childImageSharp.fluid}
            name={edge.node.name}
          />
        </Link>
      ))}
    </PetsWrapper>
  </MainTemplate>
);

export const query = graphql`
  {
    allPet {
      edges {
        node {
          id
          description
          lead
          name
          localImage {
            childImageSharp {
              fluid(maxWidth: 320, quality: 90) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          institution {
            name
          }
        }
      }
    }
  }
`;

export default PetsPage;
