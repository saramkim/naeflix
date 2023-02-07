import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import Credits from './Credits';
import MovieInfo from './MovieInfo';
import RecommendationMovies from './RecommendationMovies';

const MovieDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Extra = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 50px 50px;
  gap: 50px;

  @media screen and (max-width: 550px) {
    padding-left: 30px;
  }
`;

function MovieDetail() {
  const id = useParams().id!;

  return (
    <MovieDetailLayout>
      <MovieInfo id={id} />
      <Extra>
        <RecommendationMovies id={id} direction='horizontal' />
        <Credits id={id} direction='horizontal' />
      </Extra>
    </MovieDetailLayout>
  );
}

export default MovieDetail;
