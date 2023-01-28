import { useEffect, useState } from 'react';

import { getTopRatedMovies, MovieType } from 'api/movieData';

type useTopRatedMoviesType = {
  load: boolean;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useTopRatedMovies = ({ load, setLoad }: useTopRatedMoviesType) => {
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
    if (load) {
      getMovieList();
      setLoad(false);
    }
  }, [load]);

  return movieList;
};
