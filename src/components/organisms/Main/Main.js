import React from 'react';
import styled from 'styled-components';
import BookmarksBar from 'components/molecules/BookmarksBar/BookmarksBar';
import InputSelect from 'components/atoms/InputSelect/InputSelect';
import Button from 'components/atoms/Button/Button';

const MainWrapper = styled.main`
  margin: 73px auto 0 auto;
  width: 100vw;
  min-height: 425px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.primary};
`;

const Main = () => (
  <MainWrapper>
    <BookmarksBar />
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
