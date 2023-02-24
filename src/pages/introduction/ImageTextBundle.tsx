import account from 'assets/account.png';
import bestCinema from 'assets/best-cinema.mp4';
import home from 'assets/home.png';
import intro from 'assets/intro.png';
import movieDetail from 'assets/movie-detail.png';
import personDetail from 'assets/person-detail.png';
import search from 'assets/search.png';
import { FlexColumn } from 'components/style/Flex';
import styled from 'styled-components';

import ImageTextBox from './ImageTextBox';

const ImageTextBundleLayout = styled(FlexColumn)`
  width: 100%;
  align-items: center;
`;

function ImageTextBundle() {
  return (
    <ImageTextBundleLayout>
      <ImageTextBox title='시작 화면' img={intro}>
        넷플릭스(Netflix) 디자인을 차용하였습니다.
        <br />
        <br />
        회원가입, 로그인 기능이 구현되어 있습니다.
      </ImageTextBox>
      <ImageTextBox title='홈 화면' img={home} direction='reverse'>
        평점별 영화 목록, 인기 영화 목록 등 다양한 영화 목록을 확인할 수 있습니다.
        <br />
        <br />
        사용자가 직접 홈 화면 목록을 설정 가능합니다.
      </ImageTextBox>
      <ImageTextBox title='영화 상세 화면' img={movieDetail}>
        해당 영화의 정보, 예고편, 추천 영화, 관련 인물을 확인할 수 있습니다.
        <br />
        <br />
        저장, 평가, 한줄평 기능이 구현되어 있습니다.
      </ImageTextBox>
      <ImageTextBox title='인물 상세 화면' img={personDetail} direction='reverse'>
        해당 인물의 정보, 출연 영화, 제작 참여 영화를 확인할 수 있습니다.
      </ImageTextBox>
      <ImageTextBox title='인생 영화관' video={bestCinema}>
        자신의 인생 영화를 한줄평과 함께 다른 사용자들과 공유할 수 있습니다.
      </ImageTextBox>
      <ImageTextBox title='검색 기능' img={search} direction='reverse'>
        제목으로 영화를 검색하고, 이름으로 인물을 검색할 수 있습니다.
      </ImageTextBox>
      <ImageTextBox title='계정 화면' img={account}>
        계정 정보와 프로필을 입력하고 변경할 수 있습니다.
        <br />
        <br /> 구글 계정과 연동 가능합니다.
      </ImageTextBox>
    </ImageTextBundleLayout>
  );
}

export default ImageTextBundle;
