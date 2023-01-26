import { useEffect, useState } from 'react';

import { getMovieData, MovieDataType } from 'api/movieData';

export const useMovieDetail = (id: string) => {
  const [movieDetail, setMovieDetail] = useState<MovieDataType | null>(null);

  useEffect(() => {
    (async () => {
      if (id) {
        const data = getMovieData(id);
        setMovieDetail(await data);
      }
    })();
  }, [id]);

  return movieDetail;
};
