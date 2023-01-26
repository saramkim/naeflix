import { useParams } from 'react-router-dom';

import useMovieWithGenre from 'hooks/useMovieWithGenre';
import styled from 'styled-components';
import { GENRE } from 'utils/constants';

import GenreButton from '../GenreButton';
import Movie from '../Movie';
import VerticalMovieContainer from '../VerticalMovieContainer';

const GenreLayout = styled.div`
  padding: 50px;
  min-height: calc(100vh - 479px);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
`;

function Genre() {
  const { genre } = useParams();
  const movieList = useMovieWithGenre(genre!);

  return (
    <GenreLayout>
      <ButtonContainer>
        {GENRE.map((genre) => (
          <GenreButton key={genre.id} genre={genre.name} fontSize={20} />
        ))}
      </ButtonContainer>
      <VerticalMovieContainer category={genre}>
        {movieList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </VerticalMovieContainer>
    </GenreLayout>
  );
}
export default Genre;
