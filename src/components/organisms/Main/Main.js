import React from 'react';
import styled from 'styled-components';
import InputSelect from 'components/atoms/InputSelect/InputSelect';
import Button from 'components/atoms/Button/Button';

const MainWrapper = styled.main`
  width: 100%;
  min-height: 325px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.primary};
  padding: 15px 20px 22px 20px;

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    /* box-shadow: 0 0 30px rgba(0, 0, 0, 0.78); */
    padding-top: 65px;
  }
`;

const Main = () => (
  <MainWrapper>
    <InputSelect />
    <InputSelect />
    <InputSelect />
    <InputSelect />
    <InputSelect />
    <InputSelect />
    <Button>Szukaj</Button>
  </MainWrapper>
);

export default Main;
