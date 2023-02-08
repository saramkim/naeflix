import Logo from 'components/Logo';
import TextButton from 'components/TextButton';
import { AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';

const BannerLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c1949;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 800px;

  height: 144px;
  width: 90%;
  padding: 28px;
  top: 805px;

  @media screen and (max-width: 550px) {
    height: 110px;
    width: 100%;
    padding: 18px;
    top: 605px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 30px;
`;

const Title = styled.h1`
  font-size: 20px;

  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

const SubTitle = styled.h2`
  font-size: 16px;

  @media screen and (max-width: 550px) {
    font-size: 12px;
  }
`;

const Icon = styled.span`
  font-size: 22px;
  margin-left: 8px;
`;

function Banner() {
  return (
    <BannerLayout>
      <Logo />
      <Content>
        <Title>회원가입 후 이용 가능</Title>
        <SubTitle>어서 내플릭스에 가입하세요.</SubTitle>
        <TextButton fontSize={16} color='#447fc4' path='/signup'>
          즉시 회원가입
          <Icon>
            <AiOutlineRight />
          </Icon>
        </TextButton>
      </Content>
    </BannerLayout>
  );
}

export default Banner;
