/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { PetsGrid } from 'components/organisms/PetsGrid/PetsGrid';
import Heading from 'components/atoms/Heading/Heading';
import Card from 'components/molecules/Card/Card';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import iconClose from 'images/icons/icon_close.svg';
import iconEdit from 'images/icons/icon_edit.svg';
import { NotificationModal } from 'components/atoms/NotificationBox/NotificationBox';
import Button from 'components/atoms/Button/Button';

const ButtonIconWrapper = styled(ButtonIcon)`
  width: 36px;
  height: 36px;
  padding: 5px;
  z-index: 1;
  position: absolute;
  right: 50px;
  top: 5px;
  background-color: ${({ theme }) => theme.gray200};
  :hover {
    background-color: ${({ theme }) => theme.white};
  }

  :last-of-type {
    right: 5px;
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
  const [notification, setNotification] = useState(null);
  const [petToDelete, setPetToDelete] = useState(null);

  if (user.isInstitution) {
    useEffect(() => {
      const unsubscribe = firebase.subscribeToInstitutionPets({
        userName: user.userName,
        onSnapshot: snapshot => {
          const snapshotPets = [];
          snapshot.forEach(doc => snapshotPets.push(doc.id));
          setPets(snapshotPets);
        },
      });

      return () => {
        if (unsubscribe) {
          unsubscribe();
        }
      };
    }, []);
  } else {
    useEffect(() => {
      const unsubscribe = firebase.subscribeToWatchedPets({
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
  }

  const deleteItem = id => {
    if (user.isInstitution) {
      console.log(id);
      setNotification(null);
    } else {
      firebase
        .removeFromPetToWatched({ petId: id, userName: user.userName })
        .then(() => setNotification('Removed from favourited'))
        .catch(err => setNotification(err.message));
    }
  };

  const renderNotification = () => (
    <NotificationModal
      header={notification}
      closeNotification={() => {
        setNotification(null);
      }}
    >
      {' '}
      {notification === 'Are you sure you want to remove the selected pet?' ? (
        <>
          <Button
            width="140px"
            height="36px"
            dismiss
            onClick={() => setNotification(null)}
          >
            cancel
          </Button>
          <Button
            type="submit"
            value="Submit"
            width="140px"
            height="36px"
            onClick={() => {
              setNotification('');
              deleteItem(petToDelete);
            }}
          >
            remove
          </Button>
        </>
      ) : (
        <Button
          width="140px"
          height="36px"
          dismiss
          onClick={() => setNotification(null)}
        >
          Ok
        </Button>
      )}
    </NotificationModal>
  );

  return (
    <>
      {user.isInstitution ? (
        <Heading>
          {pets.length === 0 ? 'No animals added' : 'Pets for adoption'}
        </Heading>
      ) : (
        <Heading>
          {pets.length === 0 ? 'No animals added' : 'Favourites pets'}
        </Heading>
      )}
      {notification !== null && renderNotification()}
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
              {user.isInstitution && (
                <ButtonIconWrapper
                  icon={iconEdit}
                  onClick={() => console.log(edge.node.id)}
                  title="Edit pet"
                />
              )}
              <ButtonIconWrapper
                icon={iconClose}
                onClick={() => {
                  setNotification(
                    'Are you sure you want to remove the selected pet?'
                  );
                  setPetToDelete(edge.node.id);
                }}
                title="Remove from favourities"
              />
            </Card>
          ))}
      </PetsGrid>
    </>
  );
};

export default PetsList;
