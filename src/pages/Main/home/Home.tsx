import styled from 'styled-components';

import MoviesWithStars from '../MoviesWithStars';
import WatchedMovies from '../WatchedMovies';

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 50px 50px;
  gap: 50px;
`;

function Home() {
  return (
    <HomeLayout>
      <MoviesWithStars category='0stars' />
      <MoviesWithStars category='5stars' />
      <MoviesWithStars category='4.5stars' />
      <MoviesWithStars category='4stars' />
      <MoviesWithStars category='3.5stars' />
      <MoviesWithStars category='3stars' />
      <MoviesWithStars category='2.5stars' />
      <WatchedMovies direction='horizontal' />
    </HomeLayout>
  );
}

export default Home;
