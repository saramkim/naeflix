import Button from 'components/Button';
import Logo from 'components/Logo';
import { FcApproval } from 'react-icons/fc';
import styled from 'styled-components';

import OutletLayout from './OutletLayout';
import { Title } from './SignUpForm';

const CompletionLayout = styled.div`
  width: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  // display: flex;
  // justify-content: space-around;
  display: grid;
  // grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

function Completion() {
  return (
    <OutletLayout>
      <CompletionLayout>
        <Title>
          내플릭스 회원가입이 완료되었습니다.
          <FcApproval />
          <br /> 환영합니다.
        </Title>
        <Logo height='110' />
        <ButtonWrapper>
          <Button fontSize={24} padding='15px' hover path='/account'>
            계정 정보
          </Button>
          <Button fontSize={24} padding='15px' hover path='/main'>
            메인으로
          </Button>
        </ButtonWrapper>
      </CompletionLayout>
    </OutletLayout>
  );
}

export default Completion;
