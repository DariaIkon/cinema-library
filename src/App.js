import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CastPage from './views/CastPage';
import FilmPage from './views/FilmPage';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import NotFoundPage from './views/NotFoundPage';
import ReviewPage from './views/ReviewPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/:filmId" element={<FilmPage />}>
            <Route path="/:filmId/cast" element={<CastPage />}></Route>
            <Route path="/:filmId/review" element={<ReviewPage />}></Route>
          </Route>
          <Route path="/searchfilms" element={<MoviesPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
