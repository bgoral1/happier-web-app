import React from 'react';
import styled from 'styled-components';
import Bookmarks from 'components/molecules/Bookmarks/Bookmarks';
import InputSelect from 'components/atoms/InputSelect/InputSelect';
import Button from 'components/atoms/Button/Button';

const MainWrapper = styled.main`
  margin: 73px auto 0 auto;
  width: 100vw;
  min-height: 370px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.primary};
`;

const Main = () => (
  <MainWrapper>
    <Bookmarks />
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
