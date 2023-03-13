import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import * as cinemaApi from '../services/cinema-api';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import Button from '../components/Button/Button';

const FilmPage = () => {
  const [film, setFilm] = useState();
  const { filmId } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    cinemaApi.fetchOnFilm(filmId).then(setFilm);
  }, []);

  return (
    <>
      <Button title="Go back" onClick={goBack} type="button" />
      <MovieInfo film={film} />
      <Link to={`/${filmId}/cast`}>Cast</Link>
      <Link to={`/${filmId}/review`}>Review</Link>
      <Outlet />
    </>
  );
};

export default FilmPage;
