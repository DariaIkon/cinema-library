import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import * as cinemaApi from '../services/cinema-api';
import MovieInfo from '../components/MovieInfo/MovieInfo';

const FilmPage = () => {
  const [film, setFilm] = useState();
  const { filmId } = useParams();

  useEffect(() => {
    cinemaApi.fetchOnFilm(filmId).then(setFilm);
  }, []);

  return (
    <>
      <MovieInfo film={film} />
      <Link to={`/${filmId}/cast`}>Cast</Link>
      <Outlet />
    </>
  );
};

export default FilmPage;
