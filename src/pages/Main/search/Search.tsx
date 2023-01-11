import { useEffect, useRef, useState } from 'react';

import { getMovies, MovieType } from 'api/movieData';
import { AiFillCaretUp, AiOutlineDownCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { throttle } from 'utils/throttle';

import Movie from '../Movie';

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

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`;

const ScrollDown = styled.div`
  margin-top: 30px;
  font-size: 50px;
`;

const ScrollTopButton = styled.button`
  background-color: rgb(222, 222, 222);
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  font-size: 30px;
`;

const DEFAULT_PAGE = 1;

function Search() {
  const iconRef = useRef<HTMLDivElement>(null);
  const [iconY, setIconY] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [title, setTitle] = useState('');
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [totalPages, setTotalPages] = useState(DEFAULT_PAGE);
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isScroll, setIsScroll] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
    if (iconRef.current) setIconY(iconRef.current.offsetTop);
  };

  const onClickButton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsShown(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 300));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMovies([]);
    setPage(DEFAULT_PAGE);
    if (title) {
      (async () => {
        const { results, total_pages } = await getMovies(title, DEFAULT_PAGE);
        setTotalPages(total_pages);
        setMovies((v) => [...v, ...results]);
      })();
    }
  }, [title]);

  useEffect(() => {
    setIsScroll(iconY - scrollY < 800);
    if (scrollY > 800) setIsShown(true);
    else setIsShown(false);
  }, [scrollY]);

  useEffect(() => {
    if (isScroll) {
      (async () => {
        const { results } = await getMovies(title, page + 1);
        setPage((v) => v + 1);
        setMovies((v) => [...v, ...results]);
      })();
    }
  }, [isScroll]);

  return (
    <SearchLayout>
      <SearchBar setTitle={setTitle} />
      <MovieContainer>
        {title && movies && movies.map((movie) => <Movie {...movie} key={movie.id} />)}
      </MovieContainer>
      {totalPages > page && (
        <ScrollDown ref={iconRef}>
          <AiOutlineDownCircle />
        </ScrollDown>
      )}
      {isShown && (
        <ScrollTopButton onClick={onClickButton}>
          <AiFillCaretUp />
        </ScrollTopButton>
      )}
    </SearchLayout>
  );
}

export default Search;
