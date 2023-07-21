import Movie from 'components/Movie/Movie';
import { Link, Outlet } from 'react-router-dom';
import { requestMovieDetails } from 'services/api';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {

  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const {movieId} = useParams();
  
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
      <Movie movieInfo={movie}/>
      <div>
        <ul>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
          <li>
            <Link to="cast">Cast</Link>
          </li>
        </ul>
        <Outlet />
      </div>
      {loading && <Loader />}
    </main>
  );
};

export default MovieDetails;
