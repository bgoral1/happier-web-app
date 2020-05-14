import React, { useState } from 'react';
import styled from 'styled-components';
import Bookmark from 'components/atoms/Bookmark/Bookmark';

const StyledBookmarks = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.secondary};
  width: 100%;
  height: 55px;
  margin-top: 73px;

  ${({ theme }) => theme.mq.large} {
    height: 65px;
  }
`;

const BookmarksBar = () => {
  const [on, setState] = useState(true);

  const changeActive = isActive => {
    if (isActive === false) {
      setState(!on);
    }
  };

  return (
    <StyledBookmarks>
      <Bookmark
        label="Szukaj psa"
        onClick={() => changeActive(on)}
        isActive={on}
      />
      <Bookmark
        label="Szukaj kota"
        onClick={() => changeActive(!on)}
        isActive={!on}
      />
    </StyledBookmarks>
  );
};

export default BookmarksBar;
