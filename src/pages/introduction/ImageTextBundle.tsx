import account from 'assets/account.png';
import anyMovie from 'assets/any-movie.png';
import bestCinema from 'assets/best-cinema.mp4';
import home from 'assets/home.png';
import intro from 'assets/intro.png';
import movieDetail from 'assets/movie-detail.png';
import personDetail from 'assets/person-detail.png';
import search from 'assets/search.png';
import styled from 'styled-components';

import ImageTextBox from './ImageTextBox';

const ImageTextBundleLayout = styled.div`
  ${({ theme }) => theme.flex.columnCenter}
  width: 100%;
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
        평점별 영화, 인기 영화 등 다양한 영화들의 목록을 확인할 수 있습니다.
        <br />
        <br />
        시청한 영화, 자신의 평점별 영화 목록을 통해 나만의 영화 컬렉션을 만들 수 있습니다.
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
        <br />
        <br />
        등록, 삭제, 좋아요 기능이 구현되어 있습니다.
      </ImageTextBox>
      <ImageTextBox title='검색 기능' img={search} direction='reverse'>
        제목으로 영화를 검색하고, 이름으로 인물을 검색할 수 있습니다.
      </ImageTextBox>
      <ImageTextBox title='아무 영화' img={anyMovie}>
        장르와 나라 등을 선택하여 해당하는 영화들 중에서 무작위로 아무 영화를 소개합니다.
        <br />
        <br />
        대중적으로 널리 알려지지 않은 영화를 발굴하고, 영화를 추천 받을 수 있습니다.
      </ImageTextBox>
      <ImageTextBox title='계정 화면' img={account} direction='reverse'>
        계정 정보와 프로필을 입력하고 변경할 수 있습니다.
        <br />
        <br /> 구글 계정과 연동 가능합니다.
      </ImageTextBox>
    </ImageTextBundleLayout>
  );
}

export default ImageTextBundle;
