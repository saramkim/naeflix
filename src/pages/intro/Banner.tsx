import Logo from 'components/Logo';
import TextButton from 'components/TextButton';
import { AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';

const BannerLayout = styled.div`
  height: 144px;
  width: 90%;
  max-width: 800px;
  padding: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c1949;
  position: absolute;
  top: 600px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 550px) {
    height: 110px;
    width: 100%;
    margin: 0;
    padding: 18px;
    top: 470px;
  }

  @media screen and (min-width: 1450px) {
    top: 610px;
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
        <Title>간단 회원가입 후 이용 가능</Title>
        <SubTitle>평생 무료 멤버십에 가입하세요.</SubTitle>
        <TextButton fontSize={16} color='#447fc4' path='/signup'>
          자세히 알아보기
          <Icon>
            <AiOutlineRight />
          </Icon>
        </TextButton>
      </Content>
    </BannerLayout>
  );
}

export default Banner;
