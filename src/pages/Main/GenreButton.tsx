import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

type GenreButtonType = { genre: string; fontSize: number };

const GenreButtonLayout = styled.button<{ fontSize: number }>`
  font-size: ${({ fontSize }) => fontSize}px;
  color: white;
  background-color: rgb(111, 111, 111);
  border-radius: 3px;
  width: fit-content;
  padding: 0.5em 0.75em;
`;

function GenreButton({ genre, fontSize }: GenreButtonType) {
  const navigate = useNavigate();

  return (
    <GenreButtonLayout fontSize={fontSize} onClick={() => navigate(`/main/genre/${genre}`)}>
      {genre}
    </GenreButtonLayout>
  );
}

export default GenreButton;
