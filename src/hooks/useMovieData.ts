import { useEffect, useState } from 'react';

import { getMovieData } from 'api/movieData';
import { MovieDataType } from 'api/movieType';

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
