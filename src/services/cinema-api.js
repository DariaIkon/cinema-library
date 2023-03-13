import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '8276b778715363e34dd900bdeda52412';

// this is a list of the most popular films of today

export async function fetchOnTrending() {
  const response = await axios.get(`/trending/movie/week?api_key=${KEY}`);
  return response.data.results;
}

// this is a request for complete movie information for a movie page.

export async function fetchOnFilm(filmId) {
  const response = await axios.get(
    `/movie/${filmId}?api_key=${KEY}&language=en-US`
  );
  return response.data;
}

// this is a request for cast information for a movie page.

export async function fetchOnFilmCast(filmId) {
  const response = await axios.get(
    `/movie/${filmId}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
}
