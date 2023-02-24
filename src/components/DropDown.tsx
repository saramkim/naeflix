import { useState } from 'react';

import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

import { Font36 } from './style/FontSize';

type DropDownProps = {
  title: string;
  children: React.ReactNode;
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

const DropBox = styled.div<{ isClicked: boolean }>`
  background: #303030;
  transition: all 0.15s linear;
  overflow: hidden;
  max-height: ${({ isClicked }) => (isClicked ? '500' : '0')}px;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;

  font-size: 26px;
  line-height: 35px;
  padding: ${({ isClicked }) => (isClicked ? '30' : '0')}px 30px;

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

function DropDown({ title, children }: DropDownProps) {
  const [isClicked, setClcik] = useState(false);

  const onClickInitailBox = () => {
    setClcik((prev) => !prev);
  };

  return (
    <DropDownLayout>
      <InitialBox onClick={onClickInitailBox}>
        <Title>{title}</Title>
        <Font36>{isClicked ? <AiOutlineClose /> : <AiOutlinePlus />}</Font36>
      </InitialBox>
      <DropBox isClicked={isClicked}>{children}</DropBox>
    </DropDownLayout>
  );
}

export default DropDown;
