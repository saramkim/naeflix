import { useEffect, useState } from 'react';

import { getTopRatedMovies, MovieType } from 'api/movieData';

export const useTopRatedMovies = (load: boolean) => {
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const [page, setPage] = useState(1);

  const getMovieList = async () => {
    const data = await getTopRatedMovies(page);
    setMovieList((v) => [...v, ...data]);
    setPage((v) => v + 1);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  useEffect(() => {
    if (load) getMovieList();
  }, [load]);

  return movieList;
};
