import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getMovie, MovieType } from 'api/getMovie';
import styled from 'styled-components';

import Movie from './Movie';

const SearchLayout = styled.div`
  width: 100%;
  min-height: calc(100vh - 479px);
  padding: 80px;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 50px;
`;

function Search() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    setTitle(searchParams.get('title')!);
    (async () => {
      const result = await getMovie(title);
      setMovies(result);
    })();
  }, [searchParams]);

  return (
    <SearchLayout>
      <Title>검색: {title}</Title>
      <MovieContainer>
        {movies.map((movie) => (
          <Movie {...movie} />
        ))}
      </MovieContainer>
    </SearchLayout>
  );
}

export default Search;
