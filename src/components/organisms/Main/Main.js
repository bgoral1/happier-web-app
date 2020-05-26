import React, { useContext } from 'react';
import styled from 'styled-components';
import { FilterPetsStateContext } from 'src/context/FilterPetsContextProvider';
import InputSelect from 'components/atoms/InputSelect/InputSelect';
import { filters } from 'src/data/filters';
import MainBackground from 'components/molecules/MainBackground/MainBackground';
import LinkWithIcon from 'components/atoms/LinkWithIcon/LinkWithIcon';
import iconHelp from 'images/icons/icon_help.svg';
import Button from 'components/atoms/Button/Button';
import DogImage from 'components/atoms/DogImage/DogImage';
import CatImage from 'components/atoms/CatImage/CatImage';
import BookmarksBar from 'components/molecules/BookmarksBar/BookmarksBar';

const MainForm = styled.form`
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  text-transform: capitalize;

  ${({ theme }) => theme.mq.tablet} {
    padding-left: 50px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: space-around;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    position: absolute;
    right: ${({ activePet }) => (activePet === 'dog' ? '20px' : '20%')};
    top: 25px;
  }
`;

const Main = () => {
  const state = useContext(FilterPetsStateContext);

  const filterPets = event => {
    // console.log(`Your choice is: ${event.target.value}`);
    event.preventDefault();
  };

  return (
    <>
      <BookmarksBar />
      <MainBackground paws activePet={state.activePet}>
        {state.activePet === 'dog' ? <DogImage /> : <CatImage />}
        <MainForm activePet={state.activePet} onSubmit={filterPets}>
          {filters.map(item => (
            <InputSelect key={item.field} {...item} />
          ))}
          <LinkWithIcon to="/" src={iconHelp}>
            Pomoc
          </LinkWithIcon>
          <Button type="submit" value="Submit">
            Szukaj
          </Button>
        </MainForm>
      </MainBackground>
    </>
  );
};

export default Main;
