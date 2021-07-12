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
    <div className='oneItem'>
      <h2>{film.name}</h2>
      <img src={film.film_picture} alt={film.name} width='300' height='500' />

      <div className='oneItemInfo'>
        <table>
          <tbody>
            <tr>
              <td className='headInfo'>Produced by: </td>
              <td className='info'>{`${
                film.Produced_by.length < 2
                  ? film.Produced_by.map((it) => it)
                  : film.Produced_by.map((it) => ' ' + it)
              }`}</td>
            </tr>
            <tr>
              <td className='headInfo'>Directed by: </td>
              <td className='info'>
                {`${
                  film.Directed_by.length < 2
                    ? film.Directed_by.map((it) => it)
                    : film.Directed_by.map((it) => ' ' + it)
                }`}
              </td>
            </tr>
            <tr>
              <td className='headInfo'>Written by: </td>
              <td className='info'>
                {`${
                  film.Written_by.length < 2
                    ? film.Written_by.map((it) => it)
                    : film.Written_by.map((it) => ' ' + it)
                }`}
              </td>
            </tr>
            <tr>
              <td className='headInfo'>Budget: </td>
              <td className='info'>{film.Budget && ` ${film.Budget}`}</td>
            </tr>
            <tr>
              <td className='headInfo'>Gross revenue: </td>
              <td className='info'>
                {film.Gross_revenue && ` ${film.Gross_revenue}`}
              </td>
            </tr>
            <tr>
              <td className='headInfo'>Released: </td>
              <td className='info'>{`${film.Released.map(
                (it) => it + ' '
              )} `}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <h4>{resume && resume}</h4> */}
      <Link to='/' className='link'>
        Back to Main
      </Link>
    </div>
  );
};
export default FilmPage;
