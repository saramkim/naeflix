import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getMovieData } from 'api/movieData';
import { MovieDataType } from 'api/movieType';
import VerticalContainer from 'components/VerticalContainer';
import { getAllMarkedMovie } from 'firebases/firestore';
import styled from 'styled-components';

import Movie from '../Movie';

import NoCandidate from './NoCandidate';

type SelectorType = {
  setSelect: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
};

const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const SelectorLayout = styled.div`
  background: ${({ theme }) => theme.color.lightGray};
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
  padding: 50px;

  &::-webkit-scrollbar {
    width: 15px;
    border-radius: 3px;
    background: rgb(155, 155, 155);
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(55, 55, 55);
    border-radius: 3px;
  }

  @media screen and (max-width: 950px) {
    padding: 30px 0px;
  }
`;

function Selector({ setSelect, setId }: SelectorType) {
  const [movieList, setMovieList] = useState<MovieDataType[]>([]);
  const [isLoaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const hasCandidate = movieList.length > 0;

  const onClickCaptureMovie = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (hasCandidate) {
      e.stopPropagation();
      if (e.target instanceof HTMLElement && e.target.id) {
        setSelect(false);
        setId(e.target.id);
      }
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
      setLoaded(true);
    })();
  }, []);

  return (
    <Background onClick={() => navigate('/main/cinema')}>
      <SelectorLayout onClickCapture={onClickCaptureMovie}>
        {hasCandidate ? (
          <VerticalContainer category='5stars'>
            {movieList.map((movie) => (
              <Movie {...movie} key={movie.id} />
            ))}
          </VerticalContainer>
        ) : (
          isLoaded && <NoCandidate />
        )}
      </SelectorLayout>
    </Background>
  );
}
export default Selector;
