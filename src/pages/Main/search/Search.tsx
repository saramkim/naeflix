import { useEffect, useState } from 'react';

import { getMovies, MovieType } from 'api/movieData';
import styled from 'styled-components';

import Movie from '../Movie';
import VerticalMovieContainer from '../VerticalMovieContainer';

import SearchBar from './SearchBar';

const SearchLayout = styled.div`
  width: 100%;
  min-height: calc(100vh - 479px);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const DEFAULT_PAGE = 1;

function Search() {
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [totalPages, setTotalPages] = useState(DEFAULT_PAGE);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setMovies([]);
    setPage(DEFAULT_PAGE);
    if (title) {
      (async () => {
        const { results, total_pages } = await getMovies(title, DEFAULT_PAGE);
        setTotalPages(total_pages);
        setMovies((v) => [...v, ...results]);
      })();
    } else setTotalPages(DEFAULT_PAGE);
  }, [title]);

  useEffect(() => {
    if (load) {
      (async () => {
        const { results } = await getMovies(title, page + 1);
        setPage((v) => v + 1);
        setMovies((v) => [...v, ...results]);
      })();
    }
  }, [load]);

  return (
    <SearchLayout>
      <SearchBar setTitle={setTitle} />
      <VerticalMovieContainer category={title} canLoad={totalPages > page} setLoad={setLoad}>
        {movies.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </VerticalMovieContainer>
    </SearchLayout>
  );
}

export default Search;
