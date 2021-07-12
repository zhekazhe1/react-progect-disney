import React, { useEffect, useContext, useReducer, useState } from 'react';
import reducer from './filter_reducer';

const initialState = {
  allFilms: [],
  filteredFilms: [],
  sortName: '',
  directed_by: [],
  sortWritter: 'all',
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  // const films = data;

  const [state, dispatch] = useReducer(reducer, initialState);
  // const [filter, setFilter] = useState([]);
  useEffect(() => {
    dispatch({ type: 'LOAD-DATA' });
  }, []);
  useEffect(() => {
    dispatch({ type: 'SORT' });
  }, [state.sortName]);
  useEffect(() => {
    dispatch({ type: 'WRITER-SORT' });
  }, [state.sortWritter]);

  const getUniqueValues = (data, type) => {
    let unique = data.filter((it) => it[type]).map((it) => it[type]);
    unique = unique.flat();
    unique = new Set(unique);
    unique = Array.from(unique);
    unique.sort();
    return ['all', ...unique];
  };

  const updateSort = (event) => {
    // let name = event.target.name;
    let value = event.target.value;
    // console.log(event.target.value);
    dispatch({ type: 'SORT-NAME', payload: value });
  };
  const getFilmBy = (ev) => {
    console.log(ev.target.value);
    let value = ev.target.value;
    dispatch({ type: 'WRITER', payload: value });
  };
  return (
    <FilterContext.Provider
      value={{ ...state, updateSort, getUniqueValues, getFilmBy }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
