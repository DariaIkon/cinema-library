import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as cinemaApi from '../services/cinema-api';

function CastPage() {
  const [casts, setCasts] = useState();
  const { filmId } = useParams();

  const path = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    cinemaApi.fetchOnFilmCast(filmId).then(setCasts);
  }, []);

  return (
    <ul>
      {casts?.slice(0, 9).map(cast => (
        <li key={cast?.cast_id}>
          <img
            src={`${path}${cast?.profile_path}`}
            alt="Photo Actor"
            width="100px"
          />
          <span>
            Actor: <span>{cast?.name}</span>
          </span>

          <span>
            Character: <span>{cast?.character}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default CastPage;
