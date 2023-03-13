import React, { useEffect, useState } from 'react';
import * as cinemaApi from '../services/cinema-api';
import PropTypes from 'prop-types';
import { useParams, useLocation, Link } from 'react-router-dom';

function HomePage(props) {
  const [films, setFilms] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    cinemaApi.fetchOnTrending().then(setFilms);
  }, []);

  return (
    <ul>
      {films &&
        films.map(film => (
          <li key={film.id}>
            <Link to={`${pathname}${film.id}`}>{film.original_title}</Link>
          </li>
        ))}
    </ul>
  );
}

HomePage.propTypes = {};

export default HomePage;
