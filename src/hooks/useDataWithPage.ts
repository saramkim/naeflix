import { useEffect, useState } from 'react';

import { MovieType } from 'api/movieType';

type UseDataWithPageType = {
  callback(page: number, param?: string): Promise<MovieType[]>;
  param?: string;
};

export const useDataWithPage = ({ callback, param }: UseDataWithPageType) => {
  const [load, setLoad] = useState(false);
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const data = await callback(page, param);
      setMovieList((v) => [...v, ...data]);
    })();
  }, []);

  useEffect(() => {
    if (load) {
      (async () => {
        const data = await callback(page + 1, param);
        setMovieList((v) => [...v, ...data]);
        setPage((v) => v + 1);
        setLoad(false);
      })();
    }
  }, [load]);

  return { movieList, setLoad };
};
