import { createContext, useContext, useReducer } from "react";
import { useProductContext } from "./Productcontext";

const FilterContext = createContext();

const initialState = () => {};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
