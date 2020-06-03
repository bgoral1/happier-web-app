import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FilterPetsStateContext } from 'src/context/FilterPetsContextProvider';
import InputSelect from 'components/atoms/InputSelect/InputSelect';
import {
  mainDogFilters,
  allDogFilters,
  mainCatFilters,
  allCatFilters,
} from 'src/data/filters';
import MainBackground from 'components/molecules/MainBackground/MainBackground';
import Button from 'components/atoms/Button/Button';
import DogImage from 'components/atoms/DogImage/DogImage';
import CatImage from 'components/atoms/CatImage/CatImage';
import BookmarksBar from 'components/molecules/BookmarksBar/BookmarksBar';
import iconLocalization from 'images/icons/icon_localization.svg';
import iconArrow from 'images/icons/icon_arrow.svg';

const MainForm = styled.form`
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  text-transform: capitalize;

  label[for='localization'] {
    width: 100%;

    select {
      background-image: url(${iconLocalization}), url(${iconArrow});
      background-repeat: no-repeat, no-repeat;
      background-position: 3% 50%, 90% 50%;
      background-size: 32px 23px, 16px 11px;
      padding-left: 45px;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    padding-left: 50px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: space-around;

    label[for='localization'] {
      width: 50%;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    position: absolute;
    right: ${({ activePet }) => (activePet === 'dog' ? '20px' : '20%')};
    top: 25px;
  }
  ${({ theme }) => theme.mq.large} {
    width: 70%;
  }
`;

const ShowFiltersLink = styled.button`
  border: none;
  background: none;
  padding: 5px;
  color: #2349b8;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  cursor: pointer;
  margin-top: 10px;

  ${({ theme }) => theme.mq.tablet} {
    margin-top: 30px;
    margin-left: 20px;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 0;
  }

  ${({ theme }) => theme.mq.large} {
    margin-top: 30px;
  }

  :hover,
  :focus {
    color: ${({ theme }) => theme.accent};
  }
`;

const Main = () => {
  const state = useContext(FilterPetsStateContext);

  const [showAllFilters, setFiltersState] = useState(false);

  const toggleFilters = () => {
    setFiltersState(!showAllFilters);
  };

  const handleInputChange = e => {
    e.persist();
    // setErrMessage('');
    // setFormValues(currentValues => ({
    //   ...currentValues,
    //   [e.target.name]: e.target.value,
    // }));
  };

  const filterPets = e => {
    // console.log(`Your choice is: ${event.target.value}`);
    e.preventDefault();
  };

  const renderFilters = () => {
    if (state.activePet === 'dog' && showAllFilters) {
      return allDogFilters.map(item => (
        <InputSelect
          key={`${item.field}Dog`}
          opKey="Dog"
          {...item}
          onChange={handleInputChange}
          mainPage
        />
      ));
    }
    if (state.activePet === 'dog' && !showAllFilters) {
      return mainDogFilters.map(item => (
        <InputSelect
          key={`${item.field}Dog`}
          opKey="Dog"
          {...item}
          onChange={handleInputChange}
          mainPage
        />
      ));
    }
    if (state.activePet !== 'dog' && showAllFilters) {
      return allCatFilters.map(item => (
        <InputSelect
          key={`${item.field}Cat`}
          opKey="Cat"
          {...item}
          onChange={handleInputChange}
          mainPage
        />
      ));
    }
    return mainCatFilters.map(item => (
      <InputSelect
        key={`${item.field}Cat`}
        opKey="Cat"
        {...item}
        onChange={handleInputChange}
        mainPage
      />
    ));
  };

  return (
    <>
      <BookmarksBar />
      <MainBackground bigger={showAllFilters} paws activePet={state.activePet}>
        {state.activePet === 'dog' ? <DogImage /> : <CatImage />}
        <MainForm
          bigger={showAllFilters}
          activePet={state.activePet}
          onSubmit={filterPets}
        >
          {renderFilters()}
          <InputSelect
            field="localization"
            name="lokalizacja"
            values={['Warszwa', 'Kraków']}
            onChange={handleInputChange}
            mainPage
          />
          <ShowFiltersLink onClick={toggleFilters}>
            {showAllFilters ? 'Pokaż mniej filtrów' : 'Pokaż więcej filtrów'}
          </ShowFiltersLink>
          <Button type="submit" value="Submit">
            Szukaj
          </Button>
        </MainForm>
      </MainBackground>
    </>
  );
};

export default Main;
