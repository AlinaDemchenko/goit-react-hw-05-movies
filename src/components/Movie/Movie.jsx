import React from 'react';
import { StyledMovie } from './Movie.styled';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Rating } from 'components/Rating/Rating';
import backdrop from '../../images/backdropPhoto.png';

function Movie({ movieInfo }) {
  // const navigate = useNavigate();
  const location = useLocation();

  const image = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;

  const genresNormalized = movieInfo.genres
    ?.map(genre => genre.name)
    .join(', ');

  const description =
    movieInfo.overview?.length > 700
      ? movieInfo.overview.split('').splice(0, 700).join('') + '...'
      : movieInfo.overview;

  function getTitleStyle() {
    const length = movieInfo.title?.length;
    let titleStyle;

    if (length < 15) {
      titleStyle = 'small';
    } else if (length > 30) {
      titleStyle = 'large';
    } else {
      titleStyle = 'medium';
    }

    return titleStyle;
  }

  const titleStyle = getTitleStyle();
  // const handleClick = () => {
  //   navigate(location.state);
  // };
  return (
    <StyledMovie>
      <img src={movieInfo.poster_path ? image : backdrop} alt={movieInfo.title} />
      <div>
        <h2 className={titleStyle}>{movieInfo.title}</h2>
        <h3>Overview</h3>
        <p>{description}</p>
        <p>
          <b>Genres:</b>
          <span>{genresNormalized}</span>
        </p>
        {movieInfo.vote_average > 0 && (
          <Rating rating={movieInfo.vote_average} />
        )}
        <Link to={location.state} className="backLink">
          {' '}
          <span>◀︎◀︎</span>GO BACK
        </Link>
      </div>
    </StyledMovie>
  );
}

export default Movie;
