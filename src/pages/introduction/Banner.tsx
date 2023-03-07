import logo from 'assets/naeflix-logo.png';
import styled from 'styled-components';

const BannerLayout = styled.div`
  ${({ theme }) => theme.flex.columnCenter}
  width: 100%;

  gap: 150px;

  @media screen and (max-width: 950px) {
    gap: 100px;
  }
`;

const Logo = styled.img`
  margin: 50px 0;
  width: 80%;
  max-width: 500px;
`;

const TextWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  background-color: white;
  padding: 30px;

  *:nth-child(odd) {
    color: ${({ theme }) => theme.color.main};
    text-align: right;
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div`
  ${({ theme }) => theme.font(24)}
`;

function Banner() {
  return (
    <BannerLayout>
      <Logo src={logo} />
      <TextWrapper>
        <Text>나만의 영화 컬렉션, 내플릭스</Text>
        <Text>Front-end: React, TypeScript</Text>
        <Text>영화를 기록하는 웹 사이트</Text>
        <Text>Back-end: Firebase</Text>
        <Text>PC, 태블릿, 모바일 지원</Text>
        <Text>Library: Redux, styled-components, etc</Text>
        <Text>2023.01 ~ 현재 개발 중</Text>
        <Text>Data: TMDB API, Open Source</Text>
      </TextWrapper>
    </BannerLayout>
  );
}

export default Banner;
