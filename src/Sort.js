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
  // console.log(written_by)
  return (
    <div className='sort-container'>
      <div className='sortItem'>
        <h5 className='head'>Sort items by Budget:</h5>
        {/* Budget */}
        <form onClick={updateSort}>
            <input type='radio' id='min' name='min-max' value='min' />
          <label htmlFor='min' className='head'>
            min to Max
          </label>
          <br />
            <input type='radio' id='max' name='min-max' value='max' /> 
          <label htmlFor='max' className='head'>
            Max to min
          </label>
          <br></br>
        </form>
        {/* end of Budget */}
      </div>
      <div className='sortItem'>
        {/* Sort by name */}

        <form>
          <label htmlFor='sort' className='head'>
            <b> {`sort by Name:  `}</b>
          </label>
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
      </div>
      {/* Sort by writtens */}
      <div className='sortItem'>
        <form>
          <label htmlFor='sortWritten'>
            <b>{`sort Written by:  `}</b>
          </label>
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
      </div>
      {/* End of Sort by writtens */}
    </div>
  );
};

export default Sort;
