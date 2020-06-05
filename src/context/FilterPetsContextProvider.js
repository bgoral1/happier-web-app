/* eslint-disable react/prop-types */
import React, { useReducer, createContext } from 'react';

export const FilterPetsStateContext = createContext();
export const FilterPetsDispatchContext = createContext();

const initialFiltersState = {
  activePet: 'dog',
  filtersDog: {
    size: 'all',
    age: 'all',
    activity: 'all',
    bread: 'all',
    place: 'all',
    time: 'all',
    kids: 'all',
    tolerance: 'all',
    sex: 'all',
  },
  filtersCat: {
    age: 'all',
    activity: 'all',
    color: 'all',
    bread: 'all',
    time: 'all',
    kids: 'all',
    tolerance: 'all',
    sex: 'all',
  },
  localization: 'all',
};

const actions = {
  TOOGLE_ACTIVE_PET: 'TOOGLE_ACTIVE_PET',
  SET_FILTERS_DOG: 'SET_FILTERS_DOG',
  SET_FILTERS_CAT: 'SET_FILTERS_CAT',
  SET_LOCALIZATION: 'SET_LOCALIZATION',
  // RESET: 'RESET',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.TOOGLE_ACTIVE_PET:
      return { ...state, activePet: state.activePet === 'dog' ? 'cat' : 'dog' };
    case actions.SET_FILTERS_DOG: {
      const { name, value } = action.payload;
      return {
        ...state,
        filtersDog: {
          ...state.filtersDog,
          [name]: value,
        },
      };
    }
    case actions.SET_FILTERS_CAT: {
      const { name, value } = action.payload;
      return {
        ...state,
        filtersCat: {
          ...state.filtersCat,
          [name]: value,
        },
      };
    }
    case actions.SET_LOCALIZATION:
      return { ...state, localization: action.value };
    // case actions.RESET:
    //   return { ...state, ...initialFiltersState };
    default:
      throw new Error('Bad action type');
  }
};

const FilterPetsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialFiltersState);

  const dispatchValue = {
    toggleActivePet: () => {
      dispatch({ type: 'TOOGLE_ACTIVE_PET' });
    },
    setFiltersCat: (name, value) => {
      dispatch({
        type: 'SET_FILTERS_CAT',
        payload: {
          name,
          value,
        },
      });
    },
    setFiltersDog: (name, value) => {
      dispatch({
        type: 'SET_FILTERS_DOG',
        payload: {
          name,
          value,
        },
      });
    },
    setLocalization: value => {
      dispatch({ type: 'SET_LOCALIZATION', value });
    },
    // resetFilters: () => {
    //   dispatch({ type: 'RESET' });
    // },
  };

  return (
    <FilterPetsStateContext.Provider value={state}>
      <FilterPetsDispatchContext.Provider value={dispatchValue}>
        {children}
      </FilterPetsDispatchContext.Provider>
    </FilterPetsStateContext.Provider>
  );
};

export default FilterPetsContextProvider;
