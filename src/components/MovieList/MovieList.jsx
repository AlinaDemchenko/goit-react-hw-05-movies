import React from 'react';
import { StyledMovieList } from './MovieList.styled';
import MovieLink from 'components/MovieLink/MovieLink';

function MovieList({ listData }) {
  return (
    <StyledMovieList>
      {listData.map(
        ({ id, title, poster_path, release_date, vote_average}) => (
          <MovieLink
            key={id}
            title={title}
            image={poster_path}
            date={release_date}
            rating={vote_average}
            id={id}
          />
        )
      )}
    </StyledMovieList>
  );
}

export default MovieList;

//id, title, poster_path, release_date
