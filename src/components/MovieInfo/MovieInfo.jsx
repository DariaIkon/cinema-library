import React from 'react';

import './MovieInfo.scss';

const MovieInfo = ({ film }) => {
  const path = 'https://image.tmdb.org/t/p/w500/';
  const posterPath = film?.poster_path;

  return (
    <div className="movieinfo">
      <img
        src={`${path}${posterPath}`}
        alt="poster"
        className="movieinfo__img"
      />
      <div className="movieinfo__description">
        <h2 className="movieinfo__title">{film?.title}</h2>
        <ul>
          {film?.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <h3>Overview</h3>
        <p>{film?.overview}</p>
        <span>{film?.release_date}</span>
        <div></div>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {};

export default MovieInfo;
