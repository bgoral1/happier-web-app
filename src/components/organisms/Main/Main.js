import React from 'react';
import styled from 'styled-components';
import InputSelect from 'components/atoms/InputSelect/InputSelect';
import LinkWithIcon from 'components/atoms/LinkWithIcon/LinkWithIcon';
import iconHelp from 'images/icons/icon_help.svg';
import Button from 'components/atoms/Button/Button';
import pawsMainImg from 'images/pawsMain.svg';
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
  align-items: flex-start;
  align-content: space-around;

  ${({ theme }) => theme.mq.tablet} {
    min-height: 270px;
    background-image: url(${pawsMainImg});
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 25%;
    padding-left: 50px;
  }

  ${({ theme }) => theme.mq.desktop} {
    background-size: 30%;
    padding-left: 0;
    min-height: 0px;
    width: 60%;
    position: absolute;
    /* change to left:20px for catImg */
    right: 20px;
    top: 25px;
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

const Main = () => (
  <>
    <BookmarksBar />
    <BackgroundImg />
    <MainWrapper>
      <DogImage />
      <CatImage />
      <MainForm>
        <FilterWrapper>
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

export default Main;
