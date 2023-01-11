import axios from 'axios';

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieDataType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

type MovieDetailType = {
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

async function getMovies(title: string, page: number) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko&query=${title}&page=${page}&region=KR`
  );
  const { data }: { data: MovieDataType } = response;
  return data;
}

async function getMovieDetail(id: string) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko&region=KR`
  );
  const { data }: { data: MovieDetailType } = response;
  return data;
}

export { getMovieDetail, getMovies };
export type { MovieDetailType, MovieType };
