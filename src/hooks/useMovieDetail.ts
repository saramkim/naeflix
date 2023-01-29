import { useEffect, useState } from 'react';

import { getMovieData, MovieDataType } from 'api/movieData';

export const useMovieDetail = (id: string) => {
  const [movieDetail, setMovieDetail] = useState<MovieDataType | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getMovieData(id);
      setMovieDetail(data);
    })();
  }, [id]);

  return movieDetail;
};
