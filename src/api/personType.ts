import { CastType, CrewType, MovieType } from './movieType';

interface PersonType {
  adult: boolean;
  gender: number;
  id: number;
  known_for?: MovieType[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
}

type SearchPersonDataType = {
  page: number;
  results: PersonType[];
  total_pages: number;
  total_results: number;
};

interface CreditsDataType extends PersonType {
  original_name: string;
  credit_id: string;
  cast_id?: number;
  character?: string;
  order?: number;
  job?: string;
  department?: string;
  known_for: undefined;
}

interface PersonDetailType extends PersonType {
  also_known_as: string[];
  biography: string;
  birthday: Date;
  deathday: Date;
  homepage: string;
  imdb_id: string;
  place_of_birth: string;
  known_for: undefined;
}

interface PersonDataType extends PersonDetailType {
  cast: CastType[];
  crew: CrewType[];
}

export type { CreditsDataType, PersonDataType, PersonType, SearchPersonDataType };
