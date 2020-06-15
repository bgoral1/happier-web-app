/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import {
  FilterPetsStateContext,
  FilterPetsDispatchContext,
} from 'context/FilterPetsContextProvider';
import InputSelect from 'components/atoms/InputSelect/InputSelect';
import {
  mainDogFilters,
  allDogFilters,
  mainCatFilters,
  allCatFilters,
} from 'src/data/filters';
import MainBackground from 'components/molecules/MainBackground/MainBackground';
import DogImage from 'components/atoms/DogImage/DogImage';
import CatImage from 'components/atoms/CatImage/CatImage';
import BookmarksBar from 'components/molecules/BookmarksBar/BookmarksBar';
import iconLocalization from 'images/icons/icon_localization.svg';
import iconArrow from 'images/icons/icon_arrow.svg';

const MainForm = styled.form`
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
      text-transform: uppercase;
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

const ShowFiltersWrapper = styled.div`
  width: 100%;
  margin-top: 10px;

  p {
    padding: 5px;
    color: #2349b8;
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    font-size: 1.4rem;
    cursor: pointer;
    ${({ theme }) => theme.mq.desktop} {
      padding: 5px 10px;
      margin: 0 auto 0 0;
      width: 30%;
    }

    :hover,
    :focus {
      color: ${({ theme }) => theme.accent};
    }
  }
`;

const Main = ({ children, indexPage }) => {
  const { activePet, filtersDog, filtersCat, localization } = useContext(
    FilterPetsStateContext
  );
  const { setFiltersCat, setFiltersDog, setLocalization } = useContext(
    FilterPetsDispatchContext
  );

  const data = useStaticQuery(graphql`
    query {
      allInstitution {
        edges {
          node {
            city
          }
        }
      }
    }
  `);

  const cities = [];
  data.allInstitution.edges.forEach(edge => {
    cities.push(edge.node.city);
  });

  const [showAllFilters, setFiltersState] = useState(false);

  const handleInputChange = e => {
    e.persist();
    if (activePet !== 'dog') {
      setFiltersCat(e.target.name, e.target.value);
    } else {
      setFiltersDog(e.target.name, e.target.value);
    }
  };
  const handleLocalizationChange = e => {
    e.persist();
    setLocalization(e.target.value);
  };

  const renderFilters = () => {
    if (activePet === 'dog' && showAllFilters) {
      return allDogFilters.map(item => (
        <InputSelect
          key={`${item.field}Dog`}
          opKey="Dog"
          {...item}
          selectedValue={filtersDog}
          onChange={handleInputChange}
          mainPage
        />
      ));
    }
    if (activePet === 'dog' && !showAllFilters) {
      return mainDogFilters.map(item => (
        <InputSelect
          key={`${item.field}Dog`}
          opKey="Dog"
          {...item}
          selectedValue={filtersDog}
          onChange={handleInputChange}
          mainPage
        />
      ));
    }
    if (activePet !== 'dog' && showAllFilters) {
      return allCatFilters.map(item => (
        <InputSelect
          key={`${item.field}Cat`}
          opKey="Cat"
          {...item}
          selectedValue={filtersCat}
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
        selectedValue={filtersCat}
        mainPage
      />
    ));
  };

  const toggleFilters = () => {
    setFiltersState(!showAllFilters);
  };

  const filterPets = e => {
    e.preventDefault();
    navigate('/pets');
  };

  return (
    <>
      <BookmarksBar />
      <MainBackground
        indexPage={indexPage}
        bigger={showAllFilters}
        paws
        activePet={activePet}
      >
        {activePet === 'dog' ? <DogImage /> : <CatImage />}
        <MainForm
          bigger={showAllFilters}
          activePet={activePet}
          onSubmit={filterPets}
        >
          {renderFilters()}
          {console.log(localization)}
          {console.log(filtersDog)}
          {console.log(filtersCat)}
          <InputSelect
            field="localization"
            name="lokalizacja"
            values={cities}
            onChange={handleLocalizationChange}
            selectedValue={localization}
            mainPage
          />
          <ShowFiltersWrapper>
            <p
              onClick={toggleFilters}
              onKeyDown={toggleFilters}
              role="presentation"
            >
              {showAllFilters ? 'Pokaż mniej filtrów' : 'Pokaż więcej filtrów'}
            </p>
          </ShowFiltersWrapper>
          {children}
        </MainForm>
      </MainBackground>
    </>
  );
};

export default Main;
