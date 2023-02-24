import { useNavigate } from 'react-router-dom';

import ScrollToTopButton from 'components/ScrollToTopButton';
import { FlexColumn } from 'components/style/Flex';
import { Font45 } from 'components/style/FontSize';
import { getBestMovieList } from 'firebases/firestore';
import { useData } from 'hooks/useData';
import { useScrollDistance } from 'hooks/useScrollDistance';
import styled from 'styled-components';

import Post from './Post';
import PostContainer from './PostContainer';

const CinemaLayout = styled(FlexColumn)`
  background: #27003d;
  background: -moz-linear-gradient(-45deg, #27003d 0%, #50005e 49%, #41094f 69%, #280030 100%);
  background: -webkit-linear-gradient(-45deg, #27003d 0%, #50005e 49%, #41094f 69%, #280030 100%);
  background: linear-gradient(135deg, #27003d 0%, #50005e 49%, #41094f 69%, #280030 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#27003d', endColorstr='#280030',GradientType=1 );
  align-items: center;
  padding: 100px 50px;
  gap: 100px;

  @media screen and (max-width: 550px) {
    padding: 50px 30px;
    gap: 50px;
  }
`;

const RegisterButton = styled.button`
  position: relative;
  background-color: rgb(20, 20, 20);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: white;

  font-size: 30px;
  height: 100px;

  @media screen and (max-width: 550px) {
    font-size: 22px;
    height: 80px;
  }
`;

function Cinema() {
  const [bestMovieList] = useData({
    callback: getBestMovieList,
    initailValue: [],
  });
  const navigate = useNavigate();
  const exceed = useScrollDistance(800);

  return (
    <CinemaLayout>
      <Font45>인생 영화관</Font45>
      <PostContainer>
        <RegisterButton onClick={() => navigate('/main/best')}>등록</RegisterButton>
        {bestMovieList.map((data) => (
          <Post {...data} key={data.timestamp} />
        ))}
      </PostContainer>
      {exceed && <ScrollToTopButton />}
    </CinemaLayout>
  );
}

export default Cinema;
