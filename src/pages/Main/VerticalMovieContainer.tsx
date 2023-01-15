import { useEffect, useRef, useState } from 'react';

import ScrollExceed from 'components/ScrollExceed';
import ScrollToTop from 'components/ScrollToTop';
import { AiOutlineDownCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { MOVIE } from 'utils/constants';
import { throttle } from 'utils/throttle';

type VerticalMovieContainerType = {
  children: React.ReactNode;
  category?: string;
  canLoad?: boolean;
  setLoad?: React.Dispatch<React.SetStateAction<boolean>>;
};

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

function VerticalMovieContainer({
  children,
  category,
  canLoad,
  setLoad,
}: VerticalMovieContainerType) {
  const iconRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [iconY, setIconY] = useState(1000);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
    if (iconRef.current) setIconY(iconRef.current.offsetTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 300));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (setLoad) setLoad(iconY - scrollY < 800);
  }, [scrollY]);

  return (
    <Layout>
      {category && <Category>{MOVIE.CATEGORY_NAME[category]}</Category>}
      <MovieWrapper>{children}</MovieWrapper>
      {canLoad && (
        <ScrollDown ref={iconRef}>
          <AiOutlineDownCircle />
        </ScrollDown>
      )}
      <ScrollExceed distance={800}>
        <ScrollToTop />
      </ScrollExceed>
    </Layout>
  );
}

export default VerticalMovieContainer;
