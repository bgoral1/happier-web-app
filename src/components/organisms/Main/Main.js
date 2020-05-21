import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalStateContext } from 'src/context/GlobalContextProvider';
import InputSelect from 'components/atoms/InputSelect/InputSelect';
import LinkWithIcon from 'components/atoms/LinkWithIcon/LinkWithIcon';
import iconHelp from 'images/icons/icon_help.svg';
import Button from 'components/atoms/Button/Button';
import pawsMainImg from 'images/pawsMain.svg';
import pawsMainImgRev from 'images/pawsMainRev.svg';
import DogImage from 'components/atoms/DogImage/DogImage';
import CatImage from 'components/atoms/CatImage/CatImage';
// import dogImg from 'images/dogMain.png';
// import catImg from 'images/catMain.png';
import BookmarksBar from 'components/molecules/BookmarksBar/BookmarksBar';
import BackgroundImg from 'components/atoms/BackgroundImg/BackgroundImg';

const MainWrapper = styled.main`
  width: 100%;
  min-height: 300px;
  background-color: ${({ theme }) => theme.primary};
  padding: 15px 20px 22px 20px;

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    min-height: 300px;
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

const MainForm = styled.div`
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ activePet }) =>
    activePet === 'dog' ? 'flex-start' : 'flex-end'};
  align-content: space-around;

  ${({ theme }) => theme.mq.tablet} {
    min-height: 270px;
    background-image: ${({ activePet }) =>
      activePet === 'dog' ? `url(${pawsMainImg})` : `url(${pawsMainImgRev})`};
    background-repeat: no-repeat;
    background-position: ${({ activePet }) =>
      activePet === 'dog' ? '100% 100%' : '0% 100%'};
    background-size: 25%;
    padding-left: ${({ activePet }) => (activePet === 'dog' ? '50px' : '0')};
    padding-right: ${({ activePet }) => (activePet === 'dog' ? '0' : '50px')};
  }

  ${({ theme }) => theme.mq.desktop} {
    background-size: 30%;
    min-height: 0px;
    width: 60%;
    position: absolute;
    left: ${({ activePet }) => (activePet === 'dog' ? 'auto' : '20px')};
    right: ${({ activePet }) => (activePet === 'dog' ? '20px' : 'auto')};
    right: 20px;
    top: 25px;
    padding-left: ${({ activePet }) => (activePet === 'dog' ? '0' : '70px')};
  }
`;

const FilterWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: space-around;

  ${({ theme }) => theme.mq.tablet} {
    width: 90%;
  }
`;

const Main = () => {
  const state = useContext(GlobalStateContext);

  return (
    <>
      <BookmarksBar />
      <BackgroundImg />
      <MainWrapper>
        {state.activePet === 'dog' ? <DogImage /> : <CatImage />}
        <MainForm activePet={state.activePet}>
          <FilterWrapper activePet={state.activePet}>
            <InputSelect />
            <InputSelect />
            <InputSelect />
            <InputSelect />
            <LinkWithIcon to="/" src={iconHelp}>
              Pomoc
            </LinkWithIcon>
          </FilterWrapper>
          <Button>Szukaj</Button>
        </MainForm>
      </MainWrapper>
    </>
  );
};

export default Main;
