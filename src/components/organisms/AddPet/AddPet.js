import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { FirebaseContext } from 'context/Firebase/context';
import UserPanelTemplate from 'templates/UserPanelTemplate/UserPanelTemplate';
import Heading from 'components/atoms/Heading/Heading';
import PetForm from 'components/organisms/PetForm/PetForm';

const AddPet = ({ petToUpdate, resetUpdate }) => {
  const { firebase, user } = useContext(FirebaseContext);
  const [message, setMessage] = useState({ content: null, success: false });

  let isMounted = true;

  useEffect(() => {
    return () => {
      isMounted = false;
    };
  }, []);

  const handleForm = (
    petSpecies,
    formValues,
    filterValuesDog,
    filterValuesCat,
    petImage,
    petId,
    petDataToUpdate
  ) => {
    if (
      petId &&
      petDataToUpdate &&
      Object.keys(petDataToUpdate).length === 0 &&
      petImage === null
    ) {
      setMessage({
        content: 'There is no data to update',
        success: false,
      });
      setTimeout(() => resetUpdate(), 2000);
    } else if (
      petId &&
      petDataToUpdate &&
      (Object.keys(petDataToUpdate).length !== 0 || petImage !== null)
    ) {
      firebase
        .updatePet({ petId, petDataToUpdate, petImage })
        .then(() => {
          if (isMounted) {
            setMessage({
              content:
                'The changes was saved in the database and will be visible in the system for several minutes.',
              success: true,
            });
          }
        })
        .then(() => setTimeout(() => resetUpdate(), 2000))
        .catch(err => {
          if (isMounted) {
            setMessage({
              content: err.message,
              success: false,
            });
          }
        });
    } else {
      if (petImage === null) {
        try {
          throw new Error('You must add a photo of an animal');
        } catch (err) {
          if (isMounted) {
            setMessage({
              content: err.message,
              success: false,
            });
            return;
          }
        }
      }

      if (petSpecies === 'dog') {
        firebase
          .addPet({
            species: petSpecies,
            name: formValues.name,
            lead: formValues.lead,
            description: formValues.description,
            institutionId: user.userName,
            filters: filterValuesDog,
            petImage,
          })
          .then(() => {
            if (isMounted) {
              setMessage({
                content:
                  'The pet was added in the database and will be visible in the system for several minutes.',
                success: true,
              });
            }
          })
          .then(() => setTimeout(() => navigate('/panel'), 2000))
          .catch(err => {
            if (isMounted) {
              setMessage({
                content: err.message,
                success: false,
              });
            }
          });
      } else {
        firebase
          .addPet({
            species: petSpecies,
            name: formValues.name,
            lead: formValues.lead,
            description: formValues.description,
            institutionId: user.userName,
            filters: filterValuesCat,
            petImage,
          })
          .then(() => {
            if (isMounted) {
              setMessage({
                content:
                  'The pet was added in the database and will be visible in the system for several minutes.',
                success: true,
              });
            }
          })
          .then(() => setTimeout(() => navigate('/panel'), 2000))
          .catch(err => {
            if (isMounted) {
              setMessage({
                content: err.message,
                success: false,
              });
            }
          });
      }
    }
  };

  return (
    <UserPanelTemplate>
      <Heading>
        {petToUpdate === null
          ? 'Add pet'
          : `Update the ${petToUpdate.species}:  ${petToUpdate.name}, id: ${petToUpdate.id}`}
      </Heading>
      <PetForm
        handleForm={handleForm}
        petToUpdate={petToUpdate}
        resetUpdate={resetUpdate}
        message={message}
        setMessage={setMessage}
      />
    </UserPanelTemplate>
  );
};

AddPet.propTypes = {
  petToUpdate: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
    lead: PropTypes.string,
    description: PropTypes.string,
    filters: PropTypes.shape({
      activity: PropTypes.string,
      age: PropTypes.string,
      size: PropTypes.string,
      bread: PropTypes.string,
      place: PropTypes.string,
      color: PropTypes.string,
      kids: PropTypes.string,
      sex: PropTypes.string,
      time: PropTypes.string,
      tolerance: PropTypes.string,
    }),
  }),
  resetUpdate: PropTypes.func.isRequired,
};

AddPet.defaultProps = {
  petToUpdate: null,
};

export default AddPet;
