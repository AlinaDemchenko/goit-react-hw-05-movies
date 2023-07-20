// import { StyledMovies } from './Movies÷.styled';
import { useState, useEffect } from "react";
import MovieList from "components/MovieList/MovieList";
import Searchbar from "components/Searchbar/Searchbar";
import { requestFindingMovies } from "services/api";

const Movies = () => {

  const [searchValue, setSearchValue] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlerSubmit = value => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (!searchValue) return;
    async function searchMovies() {
      try {
        setLoading(true);
        const data = await requestFindingMovies(searchValue);
        setFilteredMovies(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    searchMovies();
  }, [searchValue])

  return (
    <main>
      <Searchbar handlerSubmit={handlerSubmit}/>
      {filteredMovies.length > 0 && <MovieList listData={filteredMovies}/>}
    </main>
  );
};

export default Movies;
