import styled from 'styled-components';

import MoviesWithStars from '../MoviesWithStars';
import TopRatedMovies from '../TopRatedMovies';
import Trending from '../Trending';

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 50px 50px;
  gap: 50px;

  @media screen and (max-width: 550px) {
    padding-left: 30px;
  }
`;

function Home() {
  return (
    <HomeLayout>
      <Trending period='day' direction='horizontal' />
      <Trending period='week' direction='horizontal' />
      <MoviesWithStars category='0stars' direction='horizontal' />
      <MoviesWithStars category='5stars' direction='horizontal' />
      <MoviesWithStars category='4.5stars' direction='horizontal' />
      <MoviesWithStars category='4stars' direction='horizontal' />
      <MoviesWithStars category='3.5stars' direction='horizontal' />
      <MoviesWithStars category='3stars' direction='horizontal' />
      <MoviesWithStars category='2.5stars' direction='horizontal' />
      <MoviesWithStars category='2stars' direction='horizontal' />
      <MoviesWithStars category='1.5stars' direction='horizontal' />
      <MoviesWithStars category='1stars' direction='horizontal' />
      <MoviesWithStars category='0.5stars' direction='horizontal' />
      <TopRatedMovies direction='horizontal' />
    </HomeLayout>
  );
}

export default Home;
