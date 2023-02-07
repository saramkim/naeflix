import axios from 'axios';

import { MovieDataType, MovieType, SearchMovieDataType } from './movieType';
import {
  CreditsDataType,
  PersonCreditsType,
  PersonDataType,
  SearchPersonDataType,
} from './personType';

const getMovies = async (title: string, page: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&query=${title}&page=${page}&region=KR`
  );
  const { data }: { data: SearchMovieDataType } = response;
  return data;
};

const getPeople = async (name: string, page: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&query=${name}&page=${page}&region=KR`
  );
  const { data }: { data: SearchPersonDataType } = response;
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

const getCredits = async (id: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  );
  const { cast, crew }: { cast: CreditsDataType[]; crew: CreditsDataType[] } = response.data;
  const list = [...cast, ...crew];
  return list.filter(
    (v, i, arr) => i === arr.findIndex((t) => t.id === v.id && t.department === v.department)
  );
};

const getPersonData = async (id: string) => {
  const detailResponse = axios.get(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
  );
  const detail: PersonDataType = (await detailResponse).data;
  return detail;
};

const getPersonCredits = async (id: string) => {
  const creditsResponse = axios.get(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
  );
  const { data }: { data: PersonCreditsType } = await creditsResponse;
  return data;
};

export {
  getCredits,
  getMovieData,
  getMovies,
  getPeople,
  getPersonCredits,
  getPersonData,
  getRecommendationMovies,
  getTopRatedMovies,
};
