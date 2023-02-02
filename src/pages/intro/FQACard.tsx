import DropDown from 'components/DropDown';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import StartForm from './StartForm';

const FQACardLayout = styled.div`
  width: 100%;
  padding: 70px 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  border-bottom: ${STYLE.BORDER_BOTTOM};

  @media screen and (max-width: 550px) {
    gap: 30px;
    padding: 50px 0;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    gap: 45px;
  }
`;

const Title = styled.h1`
  font-size: 50px;

  @media screen and (max-width: 550px) {
    font-size: 26px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    font-size: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 75%;
  max-width: 815px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    width: 90%;
  }
`;

const StartFormWrapper = styled.div`
  padding: 0 30px;
`;

function FQACard() {
  return (
    <FQACardLayout>
      <Title>자주 묻는 질문</Title>
      <Content>
        <DropDown
          title='내플릭스란 무엇인가요?'
          content='내플릭스는 영화를 기록하는 비상업적 웹 사이트입니다. 시청한 영화를 기록하고, 평점과 한줄평을 남겨 자신만의 영화 데이터를 기록할 수 있습니다.'
        />
        <DropDown
          title='내플릭스 요금은 얼마인가요?'
          content='멤버십 요금은 무료입니다. 내플릭스는 비상업으로 운영합니다.'
        />
        <DropDown
          title='어디에서 이용할 수 있나요?'
          content='웹 브라우저가 동작하는 모든 곳에서 이용 가능합니다.'
        />
        <DropDown title='내플릭스에서 콘텐츠를 시청할 수 있나요?' content='시청할 수 없습니다.' />
        <DropDown
          title='아이들이 내플릭스를 이용해도 좋을까요?'
          content='어린이 전용 프로필은 없지만, 이용해도 되지 않을까요?'
        />
      </Content>
      <StartFormWrapper>
        <StartForm />
      </StartFormWrapper>
    </FQACardLayout>
  );
}

export default FQACard;
