import { useNavigate } from 'react-router-dom';

import { getBestMovieList } from 'firebases/firestore';
import { useData } from 'hooks/useData';
import styled from 'styled-components';

import Post from '../cinema/Post';

const BannerLayout = styled.div`
  ${({ theme }) => theme.flex.columnCenter};
  background: #27003d;
  background: -moz-linear-gradient(-45deg, #27003d 0%, #50005e 49%, #41094f 69%, #280030 100%);
  background: -webkit-linear-gradient(-45deg, #27003d 0%, #50005e 49%, #41094f 69%, #280030 100%);
  background: linear-gradient(135deg, #27003d 0%, #50005e 49%, #41094f 69%, #280030 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#27003d', endColorstr='#280030',GradientType=1 );
  position: relative;
  border-radius: 5px;
  gap: 30px;
  margin-left: -50px;
  padding: 50px;

  > div:last-child {
    max-width: 1080px;
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    margin-left: -30px;
    padding: 30px;
  }
`;

const Title = styled.div`
  ${({ theme }) => theme.font(36)}
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: rgb(155, 155, 155);
  font-size: 20px;
`;

function Banner({ setShownBest }: { setShownBest: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [bestMovieList] = useData({
    callback: getBestMovieList,
    initailValue: null,
  });
  const navigate = useNavigate();

  if (bestMovieList)
    return (
      <BannerLayout>
        <CloseButton onClick={() => setShownBest(false)}>X</CloseButton>
        <Title onClick={() => navigate('cinema')}>최신 인생 영화</Title>
        <Post {...bestMovieList[0]} />
      </BannerLayout>
    );

  return null;
}

export default Banner;
