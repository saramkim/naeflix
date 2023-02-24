import logo from 'assets/naeflix-logo.png';
import { FlexColumn } from 'components/style/Flex';
import { Font24 } from 'components/style/FontSize';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

const BannerLayout = styled(FlexColumn)`
  width: 100%;
  align-items: center;

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
    color: ${STYLE.MAIN_COLOR};
    text-align: right;
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

function Banner() {
  return (
    <BannerLayout>
      <Logo src={logo} />
      <TextWrapper>
        <Font24>나만의 영화 컬렉션, 내플릭스</Font24>
        <Font24>Front-end: React, TypeScript</Font24>
        <Font24>영화를 기록하는 웹 사이트</Font24>
        <Font24>Back-end: Firebase</Font24>
        <Font24>PC, 태블릿, 모바일 지원</Font24>
        <Font24>Library: Redux, styled-components, etc</Font24>
        <Font24>2023.01 ~ 현재 개발 중</Font24>
        <Font24>Data: TMDB API, Open Source</Font24>
      </TextWrapper>
    </BannerLayout>
  );
}

export default Banner;
