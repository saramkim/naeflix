import axios from 'axios';

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type SearchDataType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

type MovieDataType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: unknown;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path?: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime?: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type CreditsDataType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  cast_id?: number;
  character?: string;
  order?: number;
  job?: string;
  department?: string;
};

const getMovies = async (title: string, page: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&query=${title}&page=${page}&region=KR`
  );
  const { data }: { data: SearchDataType } = response;
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
  const { data }: { data: SearchDataType } = await response;
  const data2: SearchDataType = (await response2).data;
  const list = [...data.results, ...data2.results];
  return list.filter(
    (arr, index, callback) => index === callback.findIndex((t) => t.id === arr.id)
  );
};

const getCredits = async (id: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  );
  const { cast, crew }: { cast: CreditsDataType[]; crew: CreditsDataType[] } = response.data;
  return [...cast, ...crew];
};

const getTopRatedMovies = async (page: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&page=${page}&region=KR`
  );
  const { results }: { results: MovieType[] } = response.data;
  return results;
};

export { getCredits, getMovieData, getMovies, getRecommendationMovies, getTopRatedMovies };
export type { CreditsDataType, MovieDataType, MovieType };
