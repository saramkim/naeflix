import { useEffect, useRef, useState } from 'react';

import { AiFillCaretUp, AiOutlineDownCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { throttle } from 'utils/throttle';

import { MovieContainerType } from './HorizontalMovieContainer';

interface VerticalMovieContainerType extends MovieContainerType {
  canLoad: boolean;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const MovieWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
`;

const Category = styled.h1`
  font-size: 30px;
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

function VerticalMovieContainer({
  children,
  category,
  canLoad,
  setLoad,
}: VerticalMovieContainerType) {
  const iconRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [iconY, setIconY] = useState(1000);
  const [isShown, setShown] = useState(false);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
    if (iconRef.current) setIconY(iconRef.current.offsetTop);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setShown(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 300));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setLoad(iconY - scrollY < 800);
    if (scrollY > 800) setShown(true);
    else setShown(false);
  }, [scrollY]);

  return (
    <Layout>
      <Category>{category}</Category>
      <MovieWrapper>{children}</MovieWrapper>
      {canLoad && (
        <ScrollDown ref={iconRef}>
          <AiOutlineDownCircle />
        </ScrollDown>
      )}
      {isShown && (
        <ScrollTopButton onClick={scrollToTop}>
          <AiFillCaretUp />
        </ScrollTopButton>
      )}
    </Layout>
  );
}

export default VerticalMovieContainer;
