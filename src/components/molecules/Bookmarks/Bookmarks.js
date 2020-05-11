import React from 'react';
import styled from 'styled-components';
import Bookmark from 'components/atoms/Bookmark/Bookmark';

const StyledBookmarks = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.secondary};
  width: 100vw;
  height: 55px;
`;

const Bookmarks = () => (
  <StyledBookmarks>
    <Bookmark />
    <Bookmark />
  </StyledBookmarks>
);

export default Bookmarks;
