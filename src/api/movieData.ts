import axios from 'axios';

import { MovieDataType, MovieType, SearchMovieDataType, TrailerType } from './movieType';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const getMovies = async (title: string, page: number) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${title}&page=${page}&region=KR`
  );
  const { data }: { data: SearchMovieDataType } = response;
  return data;
};

const getMovieData = async (id: string) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR&region=KR`
  );
  const { data }: { data: MovieDataType } = response;
  return data;
};

const getRecommendationMovies = async (id: string) => {
  const response = axios.get(
    `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1`
  );
  const response2 = axios.get(
    `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=ko-KR&page=2`
  );
  const { data }: { data: SearchMovieDataType } = await response;
  const data2: SearchMovieDataType = (await response2).data;
  const list = [...data.results, ...data2.results];
  return list.filter((v, i, arr) => i === arr.findIndex((t) => t.id === v.id));
};

const getTopRatedMovies = async (page: number) => {
  const response = await axios.get(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=${page}&region=KR`
  );
  const { results }: { results: MovieType[] } = response.data;
  return results;
};

const getTrending = async (period: 'day' | 'week', page: number) => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/${period}?api_key=${API_KEY}&language=ko-KR&page=${page}`
  );
  const { results }: { results: MovieType[] } = response.data;
  return results;
};

const getTrailer = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
  const { results }: { results: TrailerType[] } = response.data;
  return results[0];
};

const getTotalPages = async (country: string, genre: string) => {
  const URL =
    country === 'foreign'
      ? `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko-KR&region=KR&with_genres=${genre}&vote_count.gte=80&vote_average.gte=6&without_original_language=ko`
      : `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko-KR&region=KR&with_genres=${genre}&vote_count.gte=10&vote_average.gte=6&with_original_language=${country}`;
  const response = await axios.get(URL);
  const { total_pages }: { total_pages: number } = response.data;
  return total_pages;
};

const getAnyMovie = async (country: string, genre: string) => {
  const totalPages = await getTotalPages(country, genre);
  const page = Math.ceil(Math.random() * totalPages);
  const URL =
    country === 'foreign'
      ? `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko-KR&region=KR&page=${page}&with_genres=${genre}&vote_count.gte=80&vote_average.gte=6&without_original_language=ko`
      : `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=ko-KR&region=KR&page=${page}&with_genres=${genre}&vote_count.gte=10&vote_average.gte=6&with_original_language=${country}`;
  const response = await axios.get(URL);
  const { results }: { results: MovieType[] } = response.data;
  const number = Math.floor(Math.random() * results.length);
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
