import React, { useMemo, useReducer, createContext, useContext } from "react";
import { initialState, contextReducer } from "./reducer";
import contextActions from "./actions";

const CategoryContext = createContext<any | null>(null);

const CategoryContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

function useCategoryContext() {
  const context = useContext<any>(CategoryContext);
  if (context === undefined) {
    throw new Error(
      "useCategoryContext must be used within a CategoryContextProvider"
    );
  }
  const [state, dispatch] = context;
  const categoryContextAction = contextActions(dispatch);
  return { state, categoryContextAction };
}

export { CategoryContextProvider, useCategoryContext };
