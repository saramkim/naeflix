import Logo from 'components/Logo';
import TextButton from 'components/TextButton';
import { AiOutlineRight } from 'react-icons/ai';
import styled from 'styled-components';

const BannerLayout = styled.div`
  height: 144px;
  width: calc(100vw - 148px);
  margin: 0 74px;
  padding: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c1949;
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
`;

const SubTitle = styled.h2`
  font-size: 16px;
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
        <Title>0,000원이면 만날 수 있는 내플릭스.</Title>
        <SubTitle>무료형 베이식 멤버십에 가입하세요.</SubTitle>
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
