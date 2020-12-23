/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Card from 'components/molecules/Card/Card';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import iconClose from 'images/icons/icon_close.svg';
import Heading from 'components/atoms/Heading/Heading';
import { PetsGrid } from 'components/organisms/PetsGrid/PetsGrid';

const ButtonIconWrapper = styled(ButtonIcon)`
  width: 36px;
  height: 36px;
  padding: 5px;
  z-index: 1;
  position: absolute;
  right: 5px;
  top: 5px;
  background-color: ${({ theme }) => theme.grey200};
  :hover {
    background-color: ${({ theme }) => theme.white};
  }
`;

const PetsList = ({ firebase, user }) => {
  const data = useStaticQuery(graphql`
    query {
      allPet {
        edges {
          node {
            id
            description
            lead
            name
            filters {
              sex
            }
            localImage {
              childImageSharp {
                fluid(maxWidth: 320, quality: 90) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            institution {
              id
              email
              city
            }
          }
        }
      }
    }
  `);

  const [pets, setPets] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.subscribeToPets({
      userName: user.userName,
      onSnapshot: snapshot => {
        const snapshotPets = [];
        snapshot.data().petsWatched.forEach(doc => snapshotPets.push(doc.id));
        setPets(snapshotPets);
      },
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const deleteItem = id => {
    if (window.confirm('Czy na pewno chcesz usunąć zwierzę z obserowanych?')) {
      firebase
        .removeFromPetToWatched({ petId: id, userName: user.userName })
        .then(() => window.alert('Usunięty z obserwowanych'))
        .catch(err => window.alert(err.message));
    }
  };

  return (
    <>
      <Heading>
        {pets.length === 0
          ? 'Nie obserwujesz jeszcze żadnych zwierząt'
          : 'Obserwowane zwierzęta'}
      </Heading>
      <PetsGrid>
        {data.allPet.edges
          .filter(edge => pets.indexOf(edge.node.id) > -1)
          .map(edge => (
            <Card
              key={edge.node.id}
              petImage={edge.node.localImage.childImageSharp.fluid}
              name={edge.node.name}
              sex={edge.node.filters.sex}
              linkTo={edge.node.id}
            >
              <ButtonIconWrapper
                icon={iconClose}
                onClick={() => deleteItem(edge.node.id)}
                title="Usuń z obserwowanych"
              />
            </Card>
          ))}
      </PetsGrid>
    </>
  );
};

export default PetsList;
