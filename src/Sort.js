import React from 'react';
import { useFilterContext } from './filter_context';
const Sort = () => {
  const {
    updateSort,
    sortName,
    sortWritter,
    getUniqueValues,
    filteredFilms,
    getFilmBy,
  } = useFilterContext();
  const written_by = getUniqueValues(filteredFilms, 'Written_by');
  // console.log(written_by);
  return (
    <div className='sort'>
      Sort items by Budget:{/* Budget */}
      <div className='range-budget'>
        <form onClick={updateSort}>
          {/* <p>Sort by Budget:</p> */}
            <input type='radio' id='min' name='min-max' value='min' />
          <label htmlFor='min'>min to Max</label>
          <br />
            <input type='radio' id='max' name='min-max' value='max' /> 
          <label htmlFor='max'>Max to min</label>
          <br></br>
        </form>
      </div>
      {/* end of Budget */}
      {/* Sort by name */}
      <form>
        <label htmlFor='sort'>{`sort by:  `} </label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          value={sortName}
          onChange={updateSort}
        >
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </form>
      {/* End Sort by name */}
      {/* Sort by writtens */}
      <form>
        <label htmlFor='sortWritten'>{`sort Written by:  `} </label>
        <select
          name='sortWritten'
          id='sortWritten'
          className='sort-input'
          // value={sortWritter}
          onChange={getFilmBy}
        >
          {written_by.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
          .join('')
        </select>
      </form>
      {/* End of Sort by writtens */}
    </div>
  );
};

export default Sort;
