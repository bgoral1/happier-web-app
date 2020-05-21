/* eslint-disable react/prop-types */
import React, { useReducer, createContext } from 'react';

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initialState = { activePet: 'dog' };

const actions = {
  TOOGLE_ACTIVE_PET: 'TOOGLE_ACTIVE_PET',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.TOOGLE_ACTIVE_PET:
      return { ...state, activePet: state.activePet === 'dog' ? 'cat' : 'dog' };
    default:
      throw new Error('Bad action type');
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
