import { Outlet } from 'react-router-dom';

import { getHomeList } from 'firebases/firestore';
import { useData } from 'hooks/useData';
import styled from 'styled-components';
import { DATA, STYLE } from 'utils/constants';

import MoviesWithStars from '../MoviesWithStars';
import TopRatedMovies from '../TopRatedMovies';
import Trending from '../Trending';

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${STYLE.HEIGHT_WITHOUT_HEADER};
  padding: 50px 0 50px 50px;
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

  const Components = {
    'top-rated': <TopRatedMovies direction='horizontal' key='top-rated' />,
    'trending-day': <Trending period='day' direction='horizontal' key='trending-day' />,
    'trending-week': <Trending period='week' direction='horizontal' key='trending-week' />,
  };

  return (
    <HomeLayout>
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
