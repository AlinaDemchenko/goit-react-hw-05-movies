import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = 'a3849424f9dfb073f2e7abf0355069b1';

const requestTrendingMovies = async () => {
    const { data } = await axios.get(`${BASE_URL}trending/movie/day`, {
params: {
        api_key: KEY,
      },
    });
    return data;
  };

const requestFindingMovies = async (q) => {
    const { data } = await axios.get(`${BASE_URL}search/movie`, {
        params: {
                api_key: KEY,
                query: q,
                include_adult: true,
              },
            });
            return data;
          };

//   a3849424f9dfb073f2e7abf0355069b1