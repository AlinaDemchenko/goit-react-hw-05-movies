import { StyledMovieLink } from './MovieLink.styled';
import { Link } from 'react-router-dom';
import backdrop from '../../images/backdropPhoto.png'

function MovieLink({ id, title, image, date, rating}) {
const primaryImage = `https://image.tmdb.org/t/p/w500${image}`;
  return (
    <StyledMovieLink>
      <Link to={`movies/${id}`}>
        <div>
          <img src={image ? primaryImage : backdrop} alt={title} />
          {/* <img src={primaryImage} alt={title} /> */}
          {/* <img src={backdropImage} alt={title} /> */}

          <h2>{title}</h2>
          <p>{date}</p>
          <p>Rating: {rating}</p>
        </div>
      </Link>
    </StyledMovieLink>
  );
}

export default MovieLink;
