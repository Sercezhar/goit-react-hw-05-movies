import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from './utils/Loader';
import { Appbar } from './Appbar';

const Homepage = lazy(() => import('./Homepage'));
const MoviesPage = lazy(() => import('./MoviesPage'));
const MovieDetailsPage = lazy(() => import('./MovieDetailsPage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Appbar />}>
          <Route index element={<Homepage />} exact />
          <Route path="movies" element={<MoviesPage />} exact />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
