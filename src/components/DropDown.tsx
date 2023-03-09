import { useState } from 'react';

import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

type DropDownProps = {
  title: string;
  children: React.ReactNode;
};

const DropDownLayout = styled.div``;

const InitialBox = styled.div`
  ${({ theme }) => theme.flex.spaceBetween}
  background: #303030;
  cursor: pointer;
  margin-bottom: 1px;
  padding: 20px 30px;

  @media screen and (min-width: 550px) and (max-width: 950px) {
    padding: 16px 24px;
  }
  @media screen and (max-width: 550px) {
    padding: 14px 22px;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.font(26)}
`;

const Icon = styled.div`
  ${({ theme }) => theme.font(36)}
`;

const DropBox = styled.div<{ isClicked: boolean }>`
  ${({ theme }) => theme.font(26)}
  max-height: ${({ isClicked }) => (isClicked ? '500' : '0')}px;
  background: #303030;
  transition: all 0.15s linear;
  overflow: hidden;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  padding: ${({ isClicked }) => (isClicked ? '30' : '0')}px 30px;

  @media screen and (min-width: 550px) and (max-width: 950px) {
    padding: ${({ isClicked }) => (isClicked ? '24' : '0')}px 24px;
  }
  @media screen and (max-width: 550px) {
    padding: ${({ isClicked }) => (isClicked ? '22' : '0')}px 22px;
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
        <Icon>{isClicked ? <AiOutlineClose /> : <AiOutlinePlus />}</Icon>
      </InitialBox>
      <DropBox isClicked={isClicked}>{children}</DropBox>
    </DropDownLayout>
  );
}

export default DropDown;
