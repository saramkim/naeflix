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
          content='내플릭스는 넷플릭스를 카피한 비상업적 웹서비스입니다. 스트리밍 서비스가 아닙니다.'
        />
        <DropDown
          title='내플릭스 요금은 얼마인가요?'
          content='멤버십 요금은 0원입니다. 추가 비용이나 약정이 없습니다.'
        />
        <DropDown
          title='어디에서 이용할 수 있나요?'
          content='현재는 웹 전용으로 개발중입니다. 추후 모바일 버전도 개발 예정입니다.'
        />
        <DropDown title='멤버십을 해지하려면 어떻게 하나요?' content='회원탈퇴 하시면 됩니다.' />
        <DropDown
          title='내플릭스에서 콘텐츠를 시청할 수 있나요?'
          content='내플릭스에서 시청할 수 있는 콘텐츠는 예고편이 전부입니다.'
        />
        <DropDown title='아이들이 내플릭스를 이용해도 좋을까요?' content='아무렴요.' />
      </Content>
      <StartFormWrapper>
        <StartForm />
      </StartFormWrapper>
    </FQACardLayout>
  );
}

export default FQACard;
