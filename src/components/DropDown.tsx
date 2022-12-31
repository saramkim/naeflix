import { useState } from 'react';

import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

type DropDownProps = {
  title: string;
  content: string;
};

const DropDownLayout = styled.div``;

const InitialBox = styled.div`
  padding: 20px 30px;
  margin-bottom: 1px;
  background: #303030;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    padding: 14px 22px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    padding: 16px 24px;
  }
`;

const Title = styled.h1`
  font-size: 26px;

  @media screen and (max-width: 550px) {
    font-size: 18px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    font-size: 20px;
  }
`;

const Icon = styled.span`
  font-size: 35px;

  @media screen and (max-width: 550px) {
    font-size: 26px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    font-size: 30px;
  }
`;

const DropBox = styled.div<{ isClicked: boolean }>`
  background: #303030;
  font-size: 26px;
  line-height: 35px;
  transition: all 0.15s linear;
  overflow: hidden;
  padding: ${({ isClicked }) => (isClicked ? '30' : '0')}px 30px;
  max-height: ${({ isClicked }) => (isClicked ? '500' : '0')}px;

  @media screen and (max-width: 550px) {
    font-size: 18px;
    line-height: 24px;
    padding: ${({ isClicked }) => (isClicked ? '22' : '0')}px 22px;
  }
  @media screen and (min-width: 550px) and (max-width: 950px) {
    font-size: 20px;
    line-height: 26px;
    padding: ${({ isClicked }) => (isClicked ? '24' : '0')}px 24px;
  }
`;

function DropDown({ title, content }: DropDownProps) {
  const [isClicked, setClcik] = useState(false);

  const onClickInitailBox = () => {
    setClcik((prev) => !prev);
  };

  return (
    <DropDownLayout>
      <InitialBox onClick={onClickInitailBox}>
        <Title>{title}</Title>
        <Icon>{isClicked ? <AiOutlineClose /> : <AiOutlinePlus />}</Icon>
      </InitialBox>
      <DropBox isClicked={isClicked}>{content}</DropBox>
    </DropDownLayout>
  );
}

export default DropDown;
