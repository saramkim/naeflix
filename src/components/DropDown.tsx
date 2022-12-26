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
`;

const Title = styled.h1`
  font-size: 26px;
`;

const Icon = styled.span`
  font-size: 35px;
`;

const DropBox = styled.div<{ isClicked: boolean }>`
  background: #303030;
  font-size: 26px;
  line-height: 35px;
  word-break: keep-all;
  transition: all 0.15s linear;
  overflow: hidden;
  padding: ${({ isClicked }) => (isClicked ? '30' : '0')}px 30px;
  max-height: ${({ isClicked }) => (isClicked ? '500' : '0')}px;
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
