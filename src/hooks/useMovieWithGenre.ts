import { useEffect, useState } from 'react';

import { getMovieData } from 'api/movieData';
import { MovieDataType } from 'api/movieType';
import { getAllMarkedMovie } from 'firebases/firestore';

export const useMovieWithGenre = (genre: string) => {
  const [movieList, setMovieList] = useState<MovieDataType[]>([]);

  useEffect(() => {
    (async () => {
      const movies = await getAllMarkedMovie();
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
