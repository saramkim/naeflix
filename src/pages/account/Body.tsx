import TextButton from 'components/TextButton';
import styled from 'styled-components';

import ContentLayout from './ContentLayout';
import Email from './Email';
import Logout from './Logout';
import Nickname from './Nickname';
import Password from './Password';
import PhoneNumber from './PhoneNumber';
import ProfileImg from './ProfileImg';
import Unregister from './Unregister';

const BodyLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px auto;
  width: 80%;
  max-width: 1024px;
`;

const Title = styled.div`
  font-size: 35px;
  padding-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid rgb(153, 153, 153);
`;

const Wrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid rgb(153, 153, 153);
  width: 100%;
  display: flex;
`;

const SubTitle = styled.div`
  padding: 10px 0;
  font-size: 18px;
  color: rgb(115, 115, 115);
  width: 260px;
`;

const Contents = styled.div`
  width: 100%;
`;

function Body() {
  return (
    <BodyLayout>
      <Title>계정</Title>
      <Wrapper>
        <SubTitle>계정 정보</SubTitle>
        <Contents>
          <Email />
          <Password />
          <PhoneNumber />
        </Contents>
      </Wrapper>
      <Wrapper>
        <SubTitle>프로필</SubTitle>
        <Contents>
          <Nickname />
          <ProfileImg />
        </Contents>
      </Wrapper>
      <Wrapper>
        <SubTitle>멤버십 정보</SubTitle>
        <Contents>
          <ContentLayout>
            <span>평생 무료</span>
          </ContentLayout>
        </Contents>
      </Wrapper>
      <Wrapper>
        <SubTitle>설정</SubTitle>
        <Contents>
          <Logout />
          <Unregister />
        </Contents>
      </Wrapper>
    </BodyLayout>
  );
}

export default Body;
