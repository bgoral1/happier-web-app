import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { FirebaseContext } from 'components/Firebase/context';
import UserPanelTemplate from 'templates/UserPanelTemplate/UserPanelTemplate';
import Bookmark from 'components/atoms/Bookmark/Bookmark';
import InputSelect from 'components/atoms/InputSelect/InputSelect';
import { allDogFilters, allCatFilters } from 'src/data/filters';
import Button from 'components/atoms/Button/Button';
import H1 from 'components/atoms/H1/H1';
import Input from 'components/atoms/Input/Input';

const Heading = styled(H1)`
  padding-left: 20px;
  ${({ theme }) => theme.mq.tablet} {
    margin-left: 110px;
    padding-left: 0;
  }
`;

const MainFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.grey200};
  padding: 20px;
  margin-bottom: 100px;

  ${({ theme }) => theme.mq.tablet} {
    margin: 0 10px 0 110px;
  }
`;

const MainForm = styled.form`
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
  padding-left: 10px;

  ${({ theme }) => theme.mq.tablet} {
    input[type='text'] {
      width: calc(50% - 10px);
    }
  }
`;

const StyledTextArea = styled(Input)`
  width: 100%;
  height: 15vh;
  border-radius: 20px;

  ${({ theme }) => theme.mq.desktop} {
    height: 30vh;
  }

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
    isActive ? theme.secondary : theme.grey100};
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

let fileReader;
if (typeof window !== 'undefined') {
  fileReader = new window.FileReader();
}

const AddPetPage = () => {
  const { firebase, user } = useContext(FirebaseContext);

  let isMounted = true;

  useEffect(() => {
    return () => {
      isMounted = false;
    };
  }, []);

  const initialFormValues = {
    name: '',
    lead: '',
    description: '',
  };

  const initialValuesDog = {
    size: 'mały',
    age: 'szczenię',
    activity: 'kanapowiec',
    bread: 'mieszaniec',
    place: 'mieszkanie',
    time: '<6h',
    kids: 'w każdym wieku',
    tolerance: 'niekonfliktowy',
    sex: 'samiec',
  };

  const initialValuesCat = {
    age: 'kocię',
    activity: 'kanapowiec',
    color: 'mieszane',
    bread: 'mieszaniec',
    time: '<6h',
    kids: 'w każdym wieku',
    tolerance: 'niekonfliktowy',
    sex: 'samiec',
  };

  const [activeDog, setActiveDog] = useState(true);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [filterValuesDog, setFilterValuesDog] = useState(initialValuesDog);
  const [filterValuesCat, setFilterValuesCat] = useState(initialValuesCat);
  const [institutionId, setInstitutionId] = useState('');
  const [petImage, setPetImage] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fileReader.addEventListener('load', () => {
      setPetImage(fileReader.result);
    });
  }, []);

  useEffect(() => {
    if (firebase && user) {
      const { email } = user;
      firebase.getInstitutionId({ email }).then(querySnapshot => {
        setInstitutionId(querySnapshot.docs[0].id);
      });
    }
  }, [firebase]);

  const toggleFilters = (isActive, e) => {
    e.preventDefault();
    if (!isActive) {
      setActiveDog(!activeDog);
    }
  };

  const handleFilterInputChange = e => {
    e.persist();
    setErrMessage('');
    setSuccess(false);
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
    setErrMessage('');
    setSuccess(false);
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
          onChange={handleFilterInputChange}
        />
      ));
    }
    return allCatFilters.map(item => (
      <InputSelect
        key={`${item.field}Cat`}
        opKey="Cat"
        {...item}
        onChange={handleFilterInputChange}
      />
    ));
  };

  const handleSubmit = e => {
    e.preventDefault();
    let petSpecies;

    if (activeDog) {
      petSpecies = 'dog';
    } else {
      petSpecies = 'cat';
    }

    // console.log(petSpecies);
    // console.log(petImage);
    // console.log(formValues);
    // console.log(filterValuesDog);
    // console.log(filterValuesCat);
    // console.log(institutionId);

    if (petSpecies === 'dog') {
      firebase
        .addPet({
          species: petSpecies,
          name: formValues.name,
          lead: formValues.lead,
          description: formValues.description,
          institutionId,
          filters: filterValuesDog,
          petImage,
        })
        .then(() => {
          if (isMounted) {
            setSuccess(true);
          }
        })
        .catch(err => {
          if (isMounted) {
            setErrMessage(err.message);
          }
        });
    } else {
      firebase
        .addPet({
          species: petSpecies,
          name: formValues.name,
          lead: formValues.lead,
          description: formValues.description,
          institutionId,
          filters: filterValuesCat,
          petImage,
        })
        .then(() => {
          if (isMounted) {
            setSuccess(true);
          }
        })
        .catch(err => {
          if (isMounted) {
            setErrMessage(err.message);
          }
        });
    }

    // setFormValues(initialFormValues);
    // setFilterValuesDog(initialValuesDog);
    // setFilterValuesCat(initialValuesCat);
  };

  return (
    <UserPanelTemplate>
      <Heading>Dodaj zwierzę</Heading>
      <MainFormWrapper>
        {!!errMessage && <p color="red">{errMessage}</p>}
        <BookmarkWrapper>
          <StyledBookmark
            label="Pies"
            onClick={e => toggleFilters(activeDog, e)}
            isActive={activeDog}
          />
          <StyledBookmark
            label="Kot"
            onClick={e => toggleFilters(!activeDog, e)}
            isActive={!activeDog}
          />
        </BookmarkWrapper>
        <MainForm
          onSubmit={handleSubmit}
          activeDog={activeDog}
          autoComplete="off"
        >
          <FiltersWrappper>{renderFilters()}</FiltersWrappper>
          <PetDescWrapper>
            <Input
              value={formValues.name}
              name="name"
              onChange={handleInputChange}
              placeholder="Imię zwierzaka"
              type="text"
              required
            />
            <Input
              value={formValues.lead}
              name="lead"
              onChange={handleInputChange}
              placeholder='Lead (np. "Przyjacielski i chętny do zabawy")'
              type="text"
              required
            />
            <StyledTextArea
              as="textarea"
              value={formValues.description}
              name="description"
              onChange={handleInputChange}
              placeholder="Opis historii zwierzaka i jego usposobienia..."
              required
            />
            <Input
              type="file"
              onChange={e => {
                e.persist();
                setSuccess(false);
                fileReader.readAsDataURL(e.target.files[0]);
              }}
            />
            {!!success && <span>Zwierzak został dodany do bazy</span>}
          </PetDescWrapper>
          <ButtonsWrapper>
            <Button type="submit" value="Submit" width="140px" height="36px">
              Dodaj
            </Button>
            <Button secondary value="Anuluj" onClick={() => navigate('/panel')}>
              Anuluj
            </Button>
          </ButtonsWrapper>
        </MainForm>
      </MainFormWrapper>
    </UserPanelTemplate>
  );
};

export default AddPetPage;