import { requestTrendingMovies }from '../../services/api';
import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    async function getTrendingList() {
      try {
        setLoading(true);
        const data = await requestTrendingMovies();
        setTrendingList(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getTrendingList();
  }, []);

  return (
    <main>
        <h1>Trending today</h1>
      <MovieList listData={trendingList} />
    </main>
  );
};

export default Home;
