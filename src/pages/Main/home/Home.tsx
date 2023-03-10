import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { getHomeList } from 'firebases/firestore';
import { useData } from 'hooks/useData';
import styled from 'styled-components';
import { DATA } from 'utils/constants';

import MoviesWithStars from '../MoviesWithStars';
import TopRatedMovies from '../TopRatedMovies';
import Trending from '../Trending';

import Banner from './Banner';

const HomeLayout = styled.div<{ isShownBest: boolean }>`
  ${({ theme }) => theme.flex.column};
  ${({ theme }) => theme.style.minHeight};
  padding: ${({ isShownBest }) => (isShownBest ? '0 0 50px 50px' : '50px 0 50px 50px')};
  gap: 50px;

  @media screen and (max-width: 550px) {
    padding-left: 30px;
  }
`;

function Home() {
  const [homeList] = useData<string[]>({
    callback: getHomeList,
    initailValue: [],
    defaultValue: DATA.HOME_LIST,
  });
  const [isShownBest, setShownBest] = useState(true);

  const Components = {
    'top-rated': <TopRatedMovies direction='horizontal' key='top-rated' />,
    'trending-day': <Trending period='day' direction='horizontal' key='trending-day' />,
    'trending-week': <Trending period='week' direction='horizontal' key='trending-week' />,
  };

  return (
    <HomeLayout isShownBest={isShownBest}>
      {isShownBest && <Banner setShownBest={setShownBest} />}
      {homeList.map(
        (category) =>
          Components[category] || (
            <MoviesWithStars category={category} direction='horizontal' key={category} />
          )
      )}
      <Outlet />
    </HomeLayout>
  );
}

export default Home;
