import { useEffect, useState } from 'react';

import { getTrending } from 'api/movieData';
import { MovieType } from 'api/movieType';

export const useTrending = (period: 'day' | 'week') => {
  const [load, setLoad] = useState(false);
  const [movieList, setMovieList] = useState<MovieType[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const data = await getTrending(period, page);
      setMovieList((v) => [...v, ...data]);
    })();
  }, []);

  useEffect(() => {
    if (load) {
      (async () => {
        const data = await getTrending(period, page + 1);
        setMovieList((v) => [...v, ...data]);
        setPage((v) => v + 1);
        setLoad(false);
      })();
    }
  }, [load]);

  return { movieList, setLoad };
};
