import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import SharedLayout from './SharedLayout/SharedLayout';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';
import MovieDetails from 'pages/ MovieDetails/ MovieDetails';
import Error from 'pages/Error/Error';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
  );
};


