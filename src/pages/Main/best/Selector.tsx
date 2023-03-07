import { useEffect, useState } from 'react';

import { getMovieData } from 'api/movieData';
import { MovieDataType } from 'api/movieType';
import VerticalContainer from 'components/VerticalContainer';
import { getAllMarkedMovie } from 'firebases/firestore';
import styled from 'styled-components';

import Movie from '../Movie';

type SelectorType = {
  setSelect: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
};

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const SelectorLayout = styled.div`
  background-color: ${({ theme }) => theme.color.lightGray};
  color: black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  overflow: hidden;
  max-width: 90%;
  width: 1280px;
  height: 80%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 15px;
    border-radius: 3px;
    background: rgb(155, 155, 155);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(55, 55, 55);
    border-radius: 3px;
  }

  padding: 50px;

  @media screen and (max-width: 950px) {
    padding: 30px 0px;
  }
`;

function Selector({ setSelect, setId }: SelectorType) {
  const [movieList, setMovieList] = useState<MovieDataType[]>([]);

  const onClickCaptureMovie = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (e.target instanceof HTMLElement && e.target.id) {
      setSelect(false);
      setId(e.target.id);
    }
  };

  useEffect(() => {
    (async () => {
      const movies = await getAllMarkedMovie();
      const idList = Object.keys(movies);
      idList.forEach(async (id) => {
        const { rating, best } = movies[id];

        if (rating === 5 && !best) {
          const detail = await getMovieData(id);
          setMovieList((v) => [...v, detail]);
        }
      });
    })();
  }, []);

  return (
    <Background onClick={() => setSelect(false)}>
      <SelectorLayout onClickCapture={onClickCaptureMovie}>
        <VerticalContainer category='5stars'>
          {movieList.map((movie) => (
            <Movie {...movie} key={movie.id} />
          ))}
        </VerticalContainer>
      </SelectorLayout>
    </Background>
  );
}
export default Selector;
