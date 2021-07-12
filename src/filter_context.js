import React, { useEffect, useContext, useReducer, useState } from 'react';
import reducer from './filter_reducer';
import data from './data/data';

const initialState = {
  allFilms: data,
  filteredFilms: data,
  sortName: '',
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  // const films = data;

  const [state, dispatch] = useReducer(reducer, initialState);
  // const [filter, setFilter] = useState([]);
  useEffect(() => {
    dispatch({ type: 'SORT' });
  }, [state.sortName]);

  const updateSort = (event) => {
    // event.priventDefault;
    let value = event.target.value;
    // console.log(event.target.value);
    dispatch({ type: 'SORT-NAME', payload: value });
  };

  return (
    <FilterContext.Provider value={{ ...state, updateSort }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
