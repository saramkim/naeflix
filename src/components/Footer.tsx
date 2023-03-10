import styled from 'styled-components';

const FooterLayout = styled.div<{ background?: string }>`
  background: ${({ background }) => background || 'inherit'};
  color: rgb(125, 125, 125);
  padding: 80px 80px;

  @media screen and (max-width: 550px) {
    padding: 60px 30px;
  }
`;

const ContentWrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  position: relative;
  margin: auto;
  max-width: 1000px;
  gap: 30px;
`;

const Inquiry = styled.span`
  font-size: 15px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(125, 125, 125);
`;

const Info = styled.div`
  ${({ theme }) => theme.flex.column};
  font-size: 13px;
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
