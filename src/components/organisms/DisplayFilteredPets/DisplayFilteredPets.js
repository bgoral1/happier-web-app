import React, { useContext } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { FilterPetsStateContext } from 'context/FilterPetsContext/FilterPetsContext';
import { PetsGrid } from 'components/organisms/PetsGrid/PetsGrid';
import Card from 'components/molecules/Card/Card';

const PetsWrapper = styled(PetsGrid)`
  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    margin-left: auto;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 90%;
    margin: 0 auto;
    padding: 40px;
    box-shadow: 0 7px 12px rgba(0, 0, 0, 0.1);
  }

  ${({ theme }) => theme.mq.large} {
    padding: 30px;
    width: 70%;
  }

  ${({ theme }) => theme.mq.veryLarge} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'header header header header';
  }
`;

const DisplayFilteredPets = () => {
  const data = useStaticQuery(graphql`
    {
      allPet {
        edges {
          node {
            species
            id
            name
            filters {
              size
              age
              activity
              bread
              place
              time
              kids
              tolerance
              sex
              color
            }
            localImage {
              childImageSharp {
                fluid(maxWidth: 320, quality: 90) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            institution {
              city
            }
          }
        }
      }
    }
  `);

  const { activePet, filtersDog, filtersCat, localization } = useContext(
    FilterPetsStateContext
  );

  let filtersValues;
  let filteredPets = data.allPet.edges.filter(
    edge => edge.node.species === activePet
  );

  if (activePet !== 'dog') {
    filtersValues = Object.entries(filtersCat).filter(
      ([, value]) => !(value === 'all')
    );
  } else {
    filtersValues = Object.entries(filtersDog).filter(
      ([, value]) => !(value === 'all')
    );
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < filtersValues.length; i++) {
    const filter = filtersValues[i];
    filteredPets = filteredPets.filter(
      edge => edge.node.filters[filter[0]] === filter[1]
    );
  }

  if (localization !== 'all') {
    filteredPets = filteredPets.filter(
      edge => edge.node.institution.city === localization
    );
  }

  const renderPets = () => {
    if (filteredPets.length !== 0) {
      return filteredPets.map(edge => (
        <Card
          key={edge.node.id}
          petImage={edge.node.localImage.childImageSharp.fluid}
          name={edge.node.name}
          sex={edge.node.filters.sex}
          linkTo={edge.node.id}
        />
      ));
    }
    return null;
  };

  return (
    <PetsWrapper>
      {filteredPets.length !== 0 ? (
        <h1>{`${activePet.charAt(0).toUpperCase() +
          activePet.slice(1)}s for adoption`}</h1>
      ) : (
        <p>
          No pets matching the selected filters. Change the selected filters.
        </p>
      )}
      {renderPets()}
    </PetsWrapper>
  );
};

export default DisplayFilteredPets;
