import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sort from './Sort';
import { useFilterContext } from './filter_context';

const AllfilmsPage = () => {
  const { filteredFilms } = useFilterContext();
  // console.log(filteredFilms)

  return (
    <div>
      <Sort />
      <section className='conteiner'>
        {filteredFilms.map((item) => {
          return (
            <div key={item.id} className='oneFilm'>
              <a href={`/film/${item.id}`}>
                <img
                  src={item.film_picture}
                  alt={item.name}
                  width='150'
                  height='250'
                />
              </a>
              <h3 className='imageName'>{item.name}</h3>
              <Link to={`/film/${item.id}`} className='btn'>
                See More
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AllfilmsPage;
