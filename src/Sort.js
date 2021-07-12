import React from 'react';
import { useFilterContext } from './filter_context';
const Sort = () => {
  const { updateSort, sortName } = useFilterContext();
  return (
    <div className='sort'>
      Sort items
      {/* Budget */}
      <div className='range-budget'>
        <form onClick={updateSort}>
          <p>Sort by Budget:</p>
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
        <label htmlFor='sort'>{`sort by  `} </label>
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
  );
};

export default Sort;
