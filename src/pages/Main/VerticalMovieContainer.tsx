import ScrollToTop from 'components/ScrollToTop';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { useScrollDistance } from 'hooks/useScrollDistance';
import { AiOutlineDownCircle } from 'react-icons/ai';
import styled from 'styled-components';
import { MOVIE } from 'utils/constants';

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
  canLoad = false,
  setLoad,
}: VerticalMovieContainerType) {
  const iconRef = setLoad ? useInfiniteScroll({ setLoad }) : null;
  const exceed = useScrollDistance(800);

  return (
    <Layout>
      {category && <Category>{MOVIE.CATEGORY_NAME[category] || category}</Category>}
      <MovieWrapper>{children}</MovieWrapper>
      {canLoad && (
        <ScrollDown ref={iconRef}>
          <AiOutlineDownCircle />
        </ScrollDown>
      )}
      {exceed && <ScrollToTop />}
    </Layout>
  );
}

export default VerticalMovieContainer;
