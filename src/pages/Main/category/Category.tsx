import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieData, MovieDataType } from 'api/movieData';
import { getWatchedMovies } from 'firebases/firestore';
import styled from 'styled-components';

import Movie from '../Movie';
import VerticalMovieContainer from '../VerticalMovieContainer';

const CategoryLayout = styled.div`
  padding: 50px;
`;

function Category() {
  const { category } = useParams();
  const [movieDetailList, setMovieDetailList] = useState<MovieDataType[]>([]);

  useEffect(() => {
    setMovieDetailList([]);

    (async () => {
      const movies = await getWatchedMovies();
      const idList = Object.keys(movies);

      idList.forEach(async (id) => {
        const detail = await getMovieData(id);
        setMovieDetailList((v) => [...v, detail]);
      });
    })();
  }, []);

  return (
    <CategoryLayout>
      <VerticalMovieContainer category={category!}>
        {movieDetailList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </VerticalMovieContainer>
    </CategoryLayout>
  );
}

export default Category;
