import { useParams } from 'react-router-dom';

import { FlexColumn } from 'components/style/Flex';
import styled from 'styled-components';

import Credits from './Credits';
import MovieInfo from './MovieInfo';
import RecommendationMovies from './RecommendationMovies';

const Extra = styled(FlexColumn)`
  padding: 50px 0 50px 50px;
  gap: 50px;

  @media screen and (max-width: 550px) {
    padding-left: 30px;
  }
`;

function MovieDetail() {
  const id = useParams().id!;

  return (
    <FlexColumn>
      <MovieInfo id={id} />
      <Extra>
        <RecommendationMovies id={id} direction='horizontal' />
        <Credits id={id} direction='horizontal' />
      </Extra>
    </FlexColumn>
  );
}

export default MovieDetail;
