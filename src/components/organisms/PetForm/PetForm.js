import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import MessageBox from 'components/atoms/MessageBox/MessageBox';
import Bookmark from 'components/atoms/Bookmark/Bookmark';
import InputSelect from 'components/atoms/InputSelect/InputSelect';
import { allDogFilters, allCatFilters } from 'src/data/filters';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';

const PetFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.gray200};
  padding: 20px;
  margin-bottom: 100px;

  ${({ theme }) => theme.mq.tablet} {
    margin: 0 10px 0 110px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  text-transform: capitalize;

  label[for='localization'] {
    display: none;
  }

  ${Input} {
    background-color: white;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    width: 100%;
    margin-bottom: 20px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

    input::placeholder {
      color: ${({ theme }) => theme.black};
      text-transform: none;
      letter-spacing: 1px;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: space-around;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 35%;
  }

  ${({ theme }) => theme.mq.large} {
    width: 25%;
  }
`;

const FiltersWrappper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
`;

const PetDescWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    padding-left: 10px;
  }
`;

const StyledTextArea = styled(Input)`
  width: 100%;
  height: 15vh;
  border-radius: 20px;

  ::placeholder {
    font-size: ${({ theme }) => theme.font.size.xxs};
    font-family: ${({ theme }) => theme.font.family.montserrat};
  }
`;

const BookmarkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;

const StyledBookmark = styled(Bookmark)`
  padding: 5px 0px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.secondary : theme.gray100};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ isActive, theme }) => (isActive ? theme.white : theme.black)};
  height: 35px;
  width: 120px;

  :first-child {
    border-radius: 20px 0 0 20px;
  }
  :last-child {
    border-radius: 0 20px 20px 0;
  }

  ${({ theme }) => theme.mq.tablet} {
    :first-child {
      border-radius: 20px 0 0 20px;
    }
    :last-child {
      border-radius: 0 20px 20px 0;
    }
    font-size: ${({ theme }) => theme.font.size.s};
    height: 35px;
    width: 120px;
  }
`;

const InputLabel = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.desktop} {
    :nth-child(1),
    :nth-child(2) {
      width: calc(50% - 10px);
    }
  }

  input,
  textarea {
    margin-top: 5px;
  }
`;

let fileReader;
if (typeof window !== 'undefined') {
  fileReader = new window.FileReader();
}

const PetForm = ({
  handleForm,
  petToUpdate,
  resetUpdate,
  message,
  setMessage,
}) => {
  let isDog = true;

  let initialFormValues = {
    name: '',
    lead: '',
    description: '',
  };

  let initialValuesDog = {
    size: 'samall',
    age: 'puppy',
    activity: 'lazy',
    bread: 'mixed breed',
    place: 'apartment',
    time: '<6h',
    kids: 'at any age',
    tolerance: 'all pets',
    sex: 'male',
  };

  let initialValuesCat = {
    age: 'kitty',
    activity: 'lazy',
    color: 'mixed',
    bread: 'mixed breed',
    time: '<6h',
    kids: 'at any age',
    tolerance: 'all pets',
    sex: 'male',
  };

  if (petToUpdate !== null) {
    isDog = petToUpdate.species === 'dog';
    initialFormValues = {
      name: petToUpdate.name,
      lead: petToUpdate.lead,
      description: petToUpdate.description,
    };
    initialValuesDog = {
      size: petToUpdate.filters.size,
      age: petToUpdate.filters.age,
      activity: petToUpdate.filters.activity,
      bread: petToUpdate.filters.bread,
      place: petToUpdate.filters.place,
      time: petToUpdate.filters.time,
      kids: petToUpdate.filters.kids,
      tolerance: petToUpdate.filters.tolerance,
      sex: petToUpdate.filters.sex,
    };
    initialValuesCat = {
      age: petToUpdate.filters.age,
      activity: petToUpdate.filters.activity,
      color: petToUpdate.filters.color,
      bread: petToUpdate.filters.bread,
      time: petToUpdate.filters.time,
      kids: petToUpdate.filters.kids,
      tolerance: petToUpdate.filters.tolerance,
      sex: petToUpdate.filters.sex,
    };
  }

  const [activeDog, setActiveDog] = useState(isDog);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [filterValuesDog, setFilterValuesDog] = useState(initialValuesDog);
  const [filterValuesCat, setFilterValuesCat] = useState(initialValuesCat);
  const [petImage, setPetImage] = useState(null);

  useEffect(() => {
    fileReader.addEventListener('load', () => {
      setPetImage(fileReader.result);
    });
  }, []);

  const toggleFilters = (isActive, e) => {
    e.preventDefault();
    if (!isActive) {
      setMessage({ content: null });
      setActiveDog(!activeDog);
    }
  };

  const resetState = () => {
    setFormValues(initialFormValues);
    setFilterValuesDog(initialValuesDog);
    setFilterValuesCat(initialValuesCat);
    resetUpdate();
  };

  const handleFilterInputChange = e => {
    e.persist();
    setMessage({ content: null });
    if (!activeDog) {
      setFilterValuesCat(currentValues => ({
        ...currentValues,
        [e.target.name]: e.target.value,
      }));
    } else {
      setFilterValuesDog(currentValues => ({
        ...currentValues,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleInputChange = e => {
    e.persist();
    setMessage({ content: null });
    setFormValues(currentValues => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
  };

  const renderFilters = () => {
    if (activeDog) {
      return allDogFilters.map(item => (
        <InputSelect
          key={`${item.field}Dog`}
          opKey="Dog"
          {...item}
          selectedValue={Object.entries(filterValuesDog)
            .find(([key]) => key === item.field)[1]
            .toString()}
          onChange={handleFilterInputChange}
        />
      ));
    }
    return allCatFilters.map(item => (
      <InputSelect
        key={`${item.field}Cat`}
        opKey="Cat"
        {...item}
        selectedValue={Object.entries(filterValuesCat)
          .find(([key]) => key === item.field)[1]
          .toString()}
        onChange={handleFilterInputChange}
      />
    ));
  };

  const renameKeys = object => {
    const keyValues = Object.keys(object).map(key => {
      const newKey = `filters.${key}`;
      return { [newKey]: object[key] };
    });
    return Object.assign({}, ...keyValues);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMessage({
      content: '',
      success: true,
    });

    let petSpecies;

    if (activeDog) {
      petSpecies = 'dog';
    } else {
      petSpecies = 'cat';
    }

    let petId;
    if (petToUpdate !== null) {
      petId = petToUpdate.id;
    }
    let filters;
    let petDataToUpdate = {};

    if (petToUpdate !== null) {
      const petDesc = Object.fromEntries(
        Object.entries(formValues).filter(
          ([, val]) => !Object.values(initialFormValues).includes(val)
        )
      );

      if (petToUpdate.species === 'dog') {
        filters = Object.fromEntries(
          Object.entries(filterValuesDog).filter(
            ([, val]) => !Object.values(initialValuesDog).includes(val)
          )
        );
      } else {
        filters = Object.fromEntries(
          Object.entries(filterValuesCat).filter(
            ([, val]) => !Object.values(initialValuesCat).includes(val)
          )
        );
      }

      if (Object.keys(filters).length !== 0) {
        filters = renameKeys(filters);
        petDataToUpdate = { ...petDesc, ...filters };
      } else {
        petDataToUpdate = { ...petDesc };
      }
    }

    handleForm(
      petSpecies,
      formValues,
      filterValuesDog,
      filterValuesCat,
      petImage,
      petId,
      petDataToUpdate
    );
  };

  return (
    <PetFormWrapper>
      {message.content !== null && (
        <MessageBox success={message.success}>{message.content}</MessageBox>
      )}
      {petToUpdate === null && (
        <BookmarkWrapper>
          <StyledBookmark
            label="Dog"
            onClick={e => toggleFilters(activeDog, e)}
            isActive={activeDog}
          />
          <StyledBookmark
            label="Cat"
            onClick={e => toggleFilters(!activeDog, e)}
            isActive={!activeDog}
          />
        </BookmarkWrapper>
      )}
      <Form onSubmit={handleSubmit} activeDog={activeDog} autoComplete="off">
        <FiltersWrappper>{renderFilters()}</FiltersWrappper>
        <PetDescWrapper>
          <InputLabel htmlFor="name">
            Pet name
            <Input
              value={formValues.name}
              name="name"
              onChange={handleInputChange}
              placeholder="Pet name"
              type="text"
              required
            />
          </InputLabel>
          <InputLabel htmlFor="lead">
            Lead
            <Input
              value={formValues.lead}
              name="lead"
              onChange={handleInputChange}
              placeholder='Lead (ex. "Friendly and eager to play")'
              type="text"
              required
            />
          </InputLabel>
          <InputLabel htmlFor="description">
            Pet description
            <StyledTextArea
              as="textarea"
              value={formValues.description}
              maxlength="550"
              name="description"
              onChange={handleInputChange}
              placeholder="Description of the history of the animal and its disposition..."
              required
            />
          </InputLabel>
          <InputLabel htmlFor="photo">
            Photo
            <Input
              type="file"
              name="photo"
              onChange={e => {
                e.persist();
                setMessage({ content: null });
                fileReader.readAsDataURL(e.target.files[0]);
              }}
            />
          </InputLabel>
        </PetDescWrapper>
        <ButtonsWrapper>
          <Button type="submit" value="Submit" width="140px" height="36px">
            {petToUpdate ? 'Update' : 'Add'}
          </Button>
          <Button
            dismiss
            value="Cancel"
            width="140px"
            height="36px"
            onClick={() => {
              resetState();
              navigate('/panel');
            }}
          >
            Cancel
          </Button>
        </ButtonsWrapper>
      </Form>
    </PetFormWrapper>
  );
};

PetForm.propTypes = {
  handleForm: PropTypes.func.isRequired,
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
  message: PropTypes.shape({
    content: PropTypes.string,
    success: PropTypes.bool,
  }),
  setMessage: PropTypes.func.isRequired,
};

PetForm.defaultProps = {
  petToUpdate: null,
  message: {
    content: null,
    success: false,
  },
};

export default PetForm;
