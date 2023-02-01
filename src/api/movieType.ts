interface MovieType {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type SearchMovieDataType = {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
};

interface MovieDataType extends MovieType {
  belongs_to_collection?: unknown;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  imdb_id: string;
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
  revenue: number;
  runtime?: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline?: string;
  genre_ids: undefined;
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

export type { CastType, CrewType, MovieDataType, MovieType, SearchMovieDataType };
