import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from './data/data';

const st = {
  id: 0,
  name: '',
  film_url: '',
  film_picture: '',
  Directed_by: [],
  Produced_by: [],
  Written_by: [],
  Starring: [],
  Music_by: [],
  Studio: [],
  Distributor: [],
  Released: [],
  Running_time: [],
  Language: [],
  Budget: [],
  Gross_revenue: [],
};
const FilmPage = () => {
  const { id } = useParams();
  // console.log(id);
  const [film, setFilm] = useState(st);

  useEffect(() => {
    const newFilm = data.find((film) => film.id === parseInt(id));
    setFilm(newFilm);
  }, []);
  // console.log(film);
  // const resume = Number(film.Gross_revenue.slice(1));
  return (
    <div className='item-wrapper'>
      <h2 className='film-name underline'>{film.name}</h2>
      <div className='image'>
        <img src={film.film_picture} alt={film.name} width='250' height='400' />
      </div>

      <div className='info-wrapper'>
        <table>
          <tbody>
            <tr>
              <td className='produced underline'>Produced by: </td>
              <td className='info-produced text'>{`${
                film.Produced_by.length < 2
                  ? film.Produced_by.map((it) => it)
                  : film.Produced_by.map((it) => ' ' + it)
              }`}</td>
            </tr>
            <tr>
              <td className='directed underline'>Directed by: </td>
              <td className='info-directed text'>
                {`${
                  film.Directed_by.length < 2
                    ? film.Directed_by.map((it) => it)
                    : film.Directed_by.map((it) => ' ' + it)
                }`}
              </td>
            </tr>
            <tr>
              <td className='written underline'>Written by: </td>
              <td className='info-written text'>
                {`${
                  film.Written_by.length < 2
                    ? film.Written_by.map((it) => it)
                    : film.Written_by.map((it) => ' ' + it)
                }`}
              </td>
            </tr>
            <tr>
              <td className='budget underline'>Budget: </td>
              <td className='info-budget text'>
                {film.Budget && `$ ${film.Budget}`}
              </td>
            </tr>
            <tr>
              <td className='gross underline'>Gross revenue: </td>
              <td className='info-gross text'>
                {film.Gross_revenue && `$ ${film.Gross_revenue}`}
              </td>
            </tr>
            <tr>
              <td className='released underline'>Released: </td>
              <td className='info-released text'>{`${film.Released.map(
                (it) => it + ' '
              )} `}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to='/' className='link text'>
        Back to Main
      </Link>
    </div>
  );
};
export default FilmPage;
