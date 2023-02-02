import TextButton from 'components/TextButton';
import styled from 'styled-components';

const FooterLayout = styled.div<{ background?: string }>`
  padding: 80px 80px;
  color: rgb(111, 111, 111);
  background-color: ${({ background }) => background || 'inherit'};

  @media screen and (max-width: 550px) {
    padding: 60px 30px;
  }
`;

const ContentWrapper = styled.div`
  margin: auto;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
`;

const Inquiry = styled.span`
  font-size: 15px;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(111, 111, 111);

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Info = styled.p`
  font-size: 12px;
`;

function Footer({ background }: { background?: string }) {
  const FONT_SIZE = 12;

  return (
    <FooterLayout background={background}>
      <ContentWrapper>
        <Inquiry>문의 이메일: saramkimm@gmail.com</Inquiry>
        <Menu>
          <TextButton fontSize={FONT_SIZE} path='/signup'>
            자주 묻는 질문
          </TextButton>
          <TextButton fontSize={FONT_SIZE} path='/signup'>
            고객센터
          </TextButton>
          <TextButton fontSize={FONT_SIZE} path='/signup'>
            계정
          </TextButton>
          <TextButton fontSize={FONT_SIZE} path='/signup'>
            미디어 센터
          </TextButton>
          <TextButton fontSize={FONT_SIZE} path='/signup'>
            내플릭스 지원 디바이스
          </TextButton>
          <TextButton fontSize={FONT_SIZE} path='/signup'>
            이용약관
          </TextButton>
          <TextButton fontSize={FONT_SIZE} path='/signup'>
            개인정보 처리방침
          </TextButton>
          <TextButton fontSize={FONT_SIZE} path='/signup'>
            쿠키 설정
          </TextButton>
          <TextButton fontSize={FONT_SIZE} path='/signup'>
            제작사 정보
          </TextButton>
          <TextButton fontSize={FONT_SIZE} path='/signup'>
            문의하기
          </TextButton>
          <TextButton fontSize={FONT_SIZE} path='/signup'>
            법적 고지
          </TextButton>
        </Menu>
        <Info>
          영화를 기록하는 비상업적 웹 사이트 ※불법 스트리밍 근절※
          <br />
          <br />
          TMDB(https://www.themoviedb.org)의 오픈소스를 사용합니다.
          <br />
          <br />
          Netflix(https://www.netflix.com)의 디자인을 카피하였습니다.
        </Info>
      </ContentWrapper>
    </FooterLayout>
  );
}

export default Footer;
