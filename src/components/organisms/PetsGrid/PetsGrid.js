import React, { useContext } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FilterPetsStateContext } from 'src/context/FilterPetsContextProvider';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card';

const PetsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.white};

  h1,
  p {
    width: 100%;
    text-align: center;
  }

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'header header header';

    h1,
    p {
      grid-area: header;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 90%;
    margin: 0 auto;
    padding: 40px;
    box-shadow: 0 7px 12px rgba(0, 0, 0, 0.1);
  }

  ${({ theme }) => theme.mq.large} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'header header header header';
    padding: 30px;
    width: 70%;
  }
`;

const PetsGrid = () => {
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
        <Link key={edge.node.id} to={`/pet/${edge.node.id}`}>
          <Card
            petImage={edge.node.localImage.childImageSharp.fluid}
            name={edge.node.name}
            sex={edge.node.filters.sex}
          />
        </Link>
      ));
    }
    return null;
  };

  return (
    <PetsWrapper>
      {filteredPets.length !== 0 ? (
        <h1>Do adopcji </h1>
      ) : (
        <p>
          Brak zwierząt pasujących do wybranych filtrów. Zmień zaznaczony wybór.
        </p>
      )}
      {renderPets()}
    </PetsWrapper>
  );
};

export default PetsGrid;