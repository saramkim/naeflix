import axios from 'axios';

import {
  CreditsDataType,
  PersonCreditsType,
  PersonDataType,
  SearchPersonDataType,
} from './personType';

const getPeople = async (name: string, page: number) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&query=${name}&page=${page}&region=KR`
  );
  const { data }: { data: SearchPersonDataType } = response;
  return data;
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
  const cast = data.cast.filter((v, i, arr) => i === arr.findIndex((t) => t.id === v.id));
  const crew = data.crew.filter((v, i, arr) => i === arr.findIndex((t) => t.id === v.id));
  return { cast, crew };
};

export { getCredits, getPeople, getPersonCredits, getPersonData };
