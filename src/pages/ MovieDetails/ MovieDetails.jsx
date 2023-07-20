import { StyledMovieDetails } from "./ MovieDetails.styled";
import { Link, Outlet } from 'react-router-dom';

const MovieDetails =() =>{
    return(
        <StyledMovieDetails>
                  <ul>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        <li>
          <Link to="cast">Cast</Link>
        </li>
      </ul>
      <Outlet />
        </StyledMovieDetails>
    )

}

export default MovieDetails;