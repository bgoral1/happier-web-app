import React, { useContext } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FilterPetsStateContext } from 'src/context/FilterPetsContextProvider';
// import { FirebaseContext } from 'components/Firebase/context';
import styled from 'styled-components';
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

  // let filterQuery = '';
  // filterQuery += `edge.node.species === "${activePet}" && `;

  // if (activePet !== 'dog') {
  //   Object.entries(filtersCat)
  //     .filter(([, value]) => !(value === 'all'))
  //     .forEach(([key, value]) => {
  //       filterQuery += `edge.node.filters.${key} === "${value}" && `;
  //     });
  // } else {
  //   Object.entries(filtersDog)
  //     .filter(([, value]) => !(value === 'all'))
  //     .forEach(([key, value]) => {
  //       filterQuery += `edge.node.filters.${key} === "${value}" && `;
  //     });
  // }

  // if (localization !== 'all') {
  //   filterQuery += `edge.node.institution.city === "${localization}"`;
  // } else {
  //   filterQuery = filterQuery.slice(0, -3);
  // }

  let query = `.where('species', '==', ${activePet})`;
  if (activePet !== 'dog') {
    Object.entries(filtersCat)
      .filter(([, value]) => !(value === 'all'))
      .forEach(([key, value]) => {
        query += `.where('${key}', '==', ${value})`;
      });
  } else {
    Object.entries(filtersDog)
      .filter(([, value]) => !(value === 'all'))
      .forEach(([key, value]) => {
        query += `.where('${key}', '==', ${value})`;
      });
  }
  if (localization !== 'all') {
    query += `.where('institution.city', '==', ${localization})`;
  }

  // const { firebase } = useContext(FirebaseContext);
  // useEffect(() => {
  //   if (firebase) {
  //     firebase.getPets(query).then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log(doc);
  //       });
  //     });
  //   }
  // }, [firebase]);

  const renderPets = () => {
    return (
      data.allPet.edges
        // eslint-disable-next-line no-unused-vars
        // .filter(edge => filterQuery)
        .map(edge => (
          <Link key={edge.node.id} to={`/pet/${edge.node.id}`}>
            <Card
              petImage={edge.node.localImage.childImageSharp.fluid}
              name={edge.node.name}
              sex={edge.node.filters.sex}
            />
          </Link>
        ))
    );
  };

  return (
    <PetsWrapper>
      <h1>Do adopcji </h1>
      {renderPets()}
      {console.log(query)}
    </PetsWrapper>
  );
};

export default PetsGrid;
