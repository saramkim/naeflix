import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import MoviesWithStars from '../MoviesWithStars';

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
  background-color: ${STYLE.ACCOUNT_COLOR};
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
  const onClickCaptureMovie = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (e.target instanceof HTMLElement && e.target.id) {
      setSelect(false);
      setId(e.target.id);
    }
  };
  return (
    <Background onClick={() => setSelect(false)}>
      <SelectorLayout onClickCapture={onClickCaptureMovie}>
        <MoviesWithStars category='5stars' direction='vertical' />
      </SelectorLayout>
    </Background>
  );
}
export default Selector;
