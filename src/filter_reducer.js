//  Тут устанавливаем всю функциональность
const filter_reducer = (state, action) => {
  if (action.type === 'SORT-NAME') {
    console.log(action.payload);
    return {
      ...state,
      sortName: action.payload,
    };
  }
  if (action.type === 'SORT') {
    const { filteredFilms, sortName } = state;
    let newFilmArray = [...filteredFilms];

    if (sortName === 'name-a') {
      newFilmArray = newFilmArray.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sortName === 'name-z') {
      newFilmArray = newFilmArray.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    if (sortName === 'min') {
      newFilmArray = newFilmArray
        .filter((item) => item.Budget)
        .sort((a, b) => {
          return a.Budget - b.Budget;
        });
    }
    if (sortName === 'max') {
      newFilmArray = newFilmArray
        .filter((item) => item.Budget)
        .sort((a, b) => {
          return b.Budget - a.Budget;
        });
    }

    return {
      ...state,
      filteredFilms: newFilmArray,
    };
  }

  throw new Error(`No Matching {action.type} - Action type`);
};
export default filter_reducer;
