import DropDown from 'components/DropDown';
import { FlexColumn } from 'components/style/Flex';
import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import StartForm from './StartForm';

const FQACardLayout = styled(FlexColumn)`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: ${STYLE.BORDER_BOTTOM};

  margin-top: 60px;
  gap: 60px;
  padding: 120px 0;

  @media screen and (max-width: 550px) {
    margin-top: 40px;
    gap: 30px;
    padding: 70px 0;
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

const Content = styled(FlexColumn)`
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
        <DropDown title='내플릭스란 무엇인가요?'>
          내플릭스는 영화를 기록하는 웹 사이트입니다.
          <br />
          시청한 영화를 기록하고, 평점과 한줄평을 남겨 자신만의 영화 컬렉션을 만들 수 있습니다.
        </DropDown>
        <DropDown title='넷플릭스와 관련이 있나요?'>
          넷플릭스(Netflix)와 아무 관련 없습니다.
          <br />
          다만 넷플릭스의 디자인을 차용하였습니다.
          <br />
          문제가 된다면 디자인이 바뀔 예정입니다.
        </DropDown>
        <DropDown title='어느 디바이스에서 이용할 수 있나요?'>
          웹 브라우저가 동작하는 모든 디바이스에서 이용 가능합니다.
        </DropDown>
        <DropDown title='내플릭스에서 영화를 시청할 수 있나요?'>
          시청할 수 없습니다.
          <br />
          스트리밍 서비스 아닙니다.
        </DropDown>
        <DropDown title='문의할 수 있나요?'>
          saramkimm@gmail.com
          <br />위 이메일로 문의주세요.
        </DropDown>
      </Content>
      <StartFormWrapper>
        <StartForm />
      </StartFormWrapper>
    </FQACardLayout>
  );
}

export default FQACard;
