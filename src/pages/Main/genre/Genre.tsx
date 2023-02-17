import { useParams } from 'react-router-dom';

import useMovieWithGenre from 'hooks/useMovieWithGenre';
import styled from 'styled-components';
import { GENRE, STYLE } from 'utils/constants';

import GenreButton from '../GenreButton';
import Movie from '../Movie';
import VerticalContainer from '../VerticalContainer';

const GenreLayout = styled.div`
  min-height: ${STYLE.HEIGHT_WITHOUT_HEADER};

  padding: 50px;

  @media screen and (max-width: 550px) {
    padding: 30px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  margin-bottom: 50px;

  @media screen and (max-width: 550px) {
    margin-bottom: 30px;
  }
`;

function Genre() {
  const { genre } = useParams();
  const movieList = useMovieWithGenre(genre!);

  return (
    <GenreLayout>
      <ButtonContainer>
        {GENRE.map((genre) => (
          <GenreButton key={genre.id} genre={genre.name} fontSize={18} />
        ))}
      </ButtonContainer>
      <VerticalContainer category={genre}>
        {movieList.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </VerticalContainer>
    </GenreLayout>
  );
}
export default Genre;
