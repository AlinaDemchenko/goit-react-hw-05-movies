import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from "react";
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));
const MovieDetails = lazy(() => import('pages/ MovieDetails/ MovieDetails'));

// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import Reviews from './Reviews/Reviews';
// import Cast from './Cast/Cast';
// import MovieDetails from 'pages/ MovieDetails/ MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
