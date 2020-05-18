import React from 'react';
import styled from 'styled-components';
import InputSelect from 'components/atoms/InputSelect/InputSelect';
import LinkWithIcon from 'components/atoms/LinkWithIcon/LinkWithIcon';
import iconHelp from 'images/icons/icon_help.svg';
import Button from 'components/atoms/Button/Button';
import PetImage from 'components/atoms/PetImage/PetImage';
import dog from 'images/dogMain.png';

const MainWrapper = styled.main`
  width: 100%;
  min-height: 370px;
  background-color: ${({ theme }) => theme.primary};
  padding: 15px 20px 22px 20px;

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    min-height: 300px;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    /* box-shadow: 0 0 30px rgba(0, 0, 0, 0.78); */
  }
`;

const MainForm = styled.div`
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: space-around;

  ${({ theme }) => theme.mq.desktop} {
    min-height: 0px;
    width: 60%;
    position: absolute;
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
`;

const Main = () => (
  <MainWrapper>
    <PetImage src={dog} />
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
);

export default Main;
