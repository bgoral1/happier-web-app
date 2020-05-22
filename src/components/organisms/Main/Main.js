import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalStateContext } from 'src/context/GlobalContextProvider';
import InputSelect from 'components/atoms/InputSelect/InputSelect';
import { filters } from 'src/data/filters';
import LinkWithIcon from 'components/atoms/LinkWithIcon/LinkWithIcon';
import iconHelp from 'images/icons/icon_help.svg';
import Button from 'components/atoms/Button/Button';
import pawsMainImg from 'images/pawsMain.svg';
import pawsMainImgRev from 'images/pawsMainRev.svg';
import DogImage from 'components/atoms/DogImage/DogImage';
import CatImage from 'components/atoms/CatImage/CatImage';
import BookmarksBar from 'components/molecules/BookmarksBar/BookmarksBar';
import BackgroundImg from 'components/atoms/BackgroundImg/BackgroundImg';

const MainWrapper = styled.main`
  width: 100%;
  min-height: 300px;
  background-color: ${({ theme }) => theme.primary};
  padding: 15px 20px 22px 20px;

  ${({ theme }) => theme.mq.tablet} {
    background-image: url(${pawsMainImg});
    background-repeat: no-repeat;
    background-position: 97% 95%;
    background-size: 15%;
  }

  ${({ theme }) => theme.mq.desktop} {
    background-size: 20%;
    background-position: ${({ activePet }) =>
      activePet === 'dog' ? '97% 95%' : '3% 95%'};
    background-image: ${({ activePet }) =>
      activePet === 'dog' ? `url(${pawsMainImg})` : `url(${pawsMainImgRev})`};
    position: relative;
    min-height: 400px;
    width: 70%;
    margin-right: auto;
    margin-left: auto;

    :before,
    :after {
      content: ' ';
      height: 100%;
      position: absolute;
      top: 0;
      width: 15px;
    }

    :before {
      box-shadow: -15px 0 15px -15px inset;
      left: -15px;
    }

    :after {
      box-shadow: 15px 0 15px -15px inset;
      right: -15px;
    }
  }
`;

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
  const state = useContext(GlobalStateContext);

  const filterPets = event => {
    // console.log(`Your choice is: ${event.target.value}`);
    event.preventDefault();
  };

  return (
    <>
      <BookmarksBar />
      <BackgroundImg />
      <MainWrapper activePet={state.activePet}>
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
      </MainWrapper>
    </>
  );
};

export default Main;
