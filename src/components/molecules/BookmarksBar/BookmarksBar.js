import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Bookmark from 'components/atoms/Bookmark/Bookmark';
import {
  FilterPetsDispatchContext,
  FilterPetsStateContext,
} from 'context/FilterPetsContext/FilterPetsContext';

const StyledBookmarks = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.secondary};
  width: 100%;
  height: 55px;
  margin-top: 74px;
`;

const BookmarksBar = () => {
  const { toggleActivePet, resetFilters } = useContext(
    FilterPetsDispatchContext
  );
  const { activePet } = useContext(FilterPetsStateContext);
  const [on, setState] = useState(activePet === 'dog');

  const changeActive = isActive => {
    if (isActive === false) {
      toggleActivePet();
      resetFilters();
      setState(!on);
    }
  };

  return (
    <StyledBookmarks>
      <Bookmark
        label="Find a dog"
        onClick={() => changeActive(on)}
        isActive={on}
      />
      <Bookmark
        label="Find a cat"
        onClick={() => changeActive(!on)}
        isActive={!on}
      />
    </StyledBookmarks>
  );
};

export default BookmarksBar;
