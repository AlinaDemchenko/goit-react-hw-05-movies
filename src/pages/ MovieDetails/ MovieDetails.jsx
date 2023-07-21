import { requestMovieDetails } from 'services/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Movie from 'components/Movie/Movie';
import Loader from 'components/Loader/Loader';
import AdditionalButton from 'components/AdditionButton/AdditionButton';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setLoading(true);
        const data = await requestMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <main>
      <Movie  movieInfo={movie} />
      <AdditionalButton/>
      {loading && <Loader />}
    </main>
  );
};

export default MovieDetails;
