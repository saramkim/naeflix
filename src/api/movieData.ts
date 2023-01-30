import axios from 'axios';

interface MovieType {
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
}

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

interface PersonDetailType {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: Date;
  deathday: Date;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

interface CastType extends MovieType {
  character: string;
  credit_id: string;
  order: number;
}

interface CrewType extends MovieType {
  credit_id: string;
  department: string;
  job: string;
}

interface PersonDataType extends PersonDetailType {
  cast: CastType[];
  crew: CrewType[];
}

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
  const creditsResponse = axios.get(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
  );
  const detail: PersonDetailType = (await detailResponse).data;
  const { cast, crew: list }: { cast: CastType[]; crew: CrewType[] } = (await creditsResponse).data;
  const crew = list.filter((v, i, arr) => i === arr.findIndex((t) => t.id === v.id));
  return { ...detail, cast, crew };
};

export {
  getCredits,
  getMovieData,
  getMovies,
  getPersonData,
  getRecommendationMovies,
  getTopRatedMovies,
};
export type { CreditsDataType, MovieDataType, MovieType, PersonDataType };
