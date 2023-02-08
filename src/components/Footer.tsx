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
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(111, 111, 111);
`;

const Info = styled.p`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function Footer({ background }: { background?: string }) {
  return (
    <FooterLayout background={background}>
      <ContentWrapper>
        <Inquiry>문의 이메일: saramkimm@gmail.com</Inquiry>
        <Info>
          <span>나의 영화를 기록하는 웹 사이트 (제작자: 김사람)</span>
          <span>TMDB(https://www.themoviedb.org) 오픈소스 사용</span>
          <span>Netflix(https://www.netflix.com) 디자인 차용</span>
          <span>@Powered by React & Friebase</span>
        </Info>
      </ContentWrapper>
    </FooterLayout>
  );
}

export default Footer;
