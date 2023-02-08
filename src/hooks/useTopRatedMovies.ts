import { useEffect, useState } from 'react';

import { getTopRatedMovies } from 'api/movieData';
import { MovieType } from 'api/movieType';

export const useTopRatedMovies = () => {
  const [load, setLoad] = useState(true);
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const [page, setPage] = useState(1);

  const getMovieList = async () => {
    const data = await getTopRatedMovies(page);
    setMovieList((v) => [...v, ...data]);
    setPage((v) => v + 1);
    setLoad(false);
  };

  useEffect(() => {
    if (load) getMovieList();
  }, [load]);

  return { movieList, setLoad };
};
