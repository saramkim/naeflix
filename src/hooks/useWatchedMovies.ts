import { useEffect, useState } from 'react';

import { getMovieData, MovieDataType } from 'api/movieData';
import { getMarkedMovie } from 'firebases/firestore';

const useWatchecMovies = () => {
  const [movieList, setMovieList] = useState<MovieDataType[]>([]);

  useEffect(() => {
    setMovieList([]);

    (async () => {
      const movies = await getMarkedMovie();
      const idList = Object.keys(movies);

      idList.forEach(async (id) => {
        const detail = await getMovieData(id);
        setMovieList((v) => [...v, detail]);
      });
    })();
  }, []);

  return movieList;
};

export default useWatchecMovies;
