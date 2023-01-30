import { useEffect, useState } from 'react';

import { getMovieData, MovieDataType } from 'api/movieData';

export const useMovieData = (id: string) => {
  const [movieData, setMovieData] = useState<MovieDataType | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getMovieData(id);
      setMovieData(data);
    })();
  }, [id]);

  return movieData;
};
