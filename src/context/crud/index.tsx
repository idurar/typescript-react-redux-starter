import React, { useMemo, useReducer, createContext, useContext } from "react";
import { initialState, contextReducer } from "./reducer";
import contextActions from "./actions";
import contextSelectors from "./selectors";

const CategoryContext = createContext();

function CategoryContextProvider({ children }) {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}

function useCategoryContext() {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error(
      "useCategoryContext must be used within a CategoryContextProvider"
    );
  }
  const [state, dispatch] = context;
  const categoryContextAction = contextActions(dispatch);
  const categoryContextSelector = contextSelectors(state);
  return { state, categoryContextAction, categoryContextSelector };
}

export { CategoryContextProvider, useCategoryContext };
