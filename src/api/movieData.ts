import axios from 'axios';

import { MovieDataType, MovieType, SearchMovieDataType, TrailerType } from './movieType';

const getMovies = async (title: string, page: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&query=${title}&page=${page}&region=KR`
  );
  const { data }: { data: SearchMovieDataType } = response;
  return data;
};

const getMovieData = async (id: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&region=KR`
  );
  const { data }: { data: MovieDataType } = response;
  return data;
};

const getRecommendationMovies = async (id: string) => {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&page=1`
  );
  const response2 = axios.get(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&page=2`
  );
  const { data }: { data: SearchMovieDataType } = await response;
  const data2: SearchMovieDataType = (await response2).data;
  const list = [...data.results, ...data2.results];
  return list.filter((v, i, arr) => i === arr.findIndex((t) => t.id === v.id));
};

const getTopRatedMovies = async (page: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&page=${page}&region=KR`
  );
  const { results }: { results: MovieType[] } = response.data;
  return results;
};

const getTrending = async (period: 'day' | 'week', page: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/${period}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&page=${page}`
  );
  const { results }: { results: MovieType[] } = response.data;
  return results;
};

const getTrailer = async (id: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  );
  const { results }: { results: TrailerType[] } = response.data;
  return results[0];
};

const getAnyMovie = async (type: 'korea' | 'all') => {
  const page = type === 'korea' ? Math.ceil(Math.random() * 19) : Math.ceil(Math.random() * 90);
  const number = Math.floor(Math.random() * 20);
  const request =
    type === 'korea'
      ? `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&region=KR&page=${page}&vote_count.gte=10&vote_average.gte=7&with_original_language=ko`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&region=KR&page=${page}&vote_count.gte=10&vote_average.gte=7`;
  const response = await axios.get(request);
  const { results }: { results: MovieType[] } = response.data;
  return results[number];
};

export {
  getAnyMovie,
  getMovieData,
  getMovies,
  getRecommendationMovies,
  getTopRatedMovies,
  getTrailer,
  getTrending,
};
