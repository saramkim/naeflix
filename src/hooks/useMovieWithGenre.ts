import { useEffect, useState } from 'react';

import { getMovieData, MovieDataType } from 'api/movieData';
import { getMarkedMovie } from 'firebases/firestore';

export const useMovieWithGenre = (genre: string) => {
  const [movieList, setMovieList] = useState<MovieDataType[]>([]);

  useEffect(() => {
    (async () => {
      const movies = await getMarkedMovie();
      const idList = Object.keys(movies);

      idList.forEach(async (id) => {
        const data = await getMovieData(id);
        data.genres.forEach((genreData) => {
          if (genreData.name === genre) setMovieList((v) => [...v, data]);
        });
      });
    })();
    return () => setMovieList([]);
  }, [genre]);

  return movieList;
};

export default useMovieWithGenre;
