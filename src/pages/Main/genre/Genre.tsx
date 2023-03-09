import { useParams } from 'react-router-dom';

import VerticalContainer from 'components/VerticalContainer';
import useMovieWithGenre from 'hooks/useMovieWithGenre';
import styled from 'styled-components';
import { GENRE } from 'utils/constants';

import GenreButton from '../GenreButton';
import Movie from '../Movie';

const GenreLayout = styled.div`
  ${({ theme }) => theme.style.minHeight};
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
        {GENRE.map(({ id, name }) => (
          <GenreButton key={id} genre={name} fontSize={18} />
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
