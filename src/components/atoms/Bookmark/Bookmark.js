import React from 'react';
import styled from 'styled-components';

const BookmarkWrappper = styled.div`
  padding: 12px 29px;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
  height: 45px;

  input {
    display: none;
  }
`;

const Bookmark = () => (
  <BookmarkWrappper>
    <label htmlFor="dog">
      Szukaj psa
      <input type="radio" id="dog" name="pets" checked />
    </label>
  </BookmarkWrappper>
);

export default Bookmark;
