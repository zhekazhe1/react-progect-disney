import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sort from './Sort';
import { useFilterContext } from './filter_context';

const AllfilmsPage = () => {
  const { allFilms, filteredFilms } = useFilterContext();
  // console.log(filteredFilms);

  return (
    <div>
      <Sort data={filteredFilms} />
      <section className='mainePicture'>
        {filteredFilms.map((item) => {
          return (
            <div key={item.id} className='allPictures'>
              <a href={`/film/${item.id}`}>
                <img
                  src={item.film_picture}
                  alt={item.name}
                  width='200'
                  height='300'
                />
              </a>
              <p className='imageName'>{item.name}</p>
              <Link to={`/film/${item.id}`} className='btn'>
                see more
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AllfilmsPage;
