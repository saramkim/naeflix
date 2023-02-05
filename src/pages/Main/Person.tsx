import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CreditsDataType } from 'api/personType';
import Image from 'components/Image';
import styled from 'styled-components';

const PersonLayout = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
`;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-size: 25px;
  padding: 10px;

  @media screen and (max-width: 550px) {
    font-size: 18px;
    padding: 0px;
  }
`;

const Name = styled.h1`
  text-align: center;
  margin: auto;

  line-height: 30px;

  @media screen and (max-width: 550px) {
    line-height: 20px;
  }
`;

const Info = styled.span`
  text-align: center;

  font-size: 20px;

  @media screen and (max-width: 550px) {
    font-size: 15px;
  }
`;

function Person({
  id,
  name,
  profile_path,
  character,
  department,
  known_for_department,
}: CreditsDataType) {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  const onClickPerson = () => navigate(`/main/person/${id}`);

  if (profile_path)
    return (
      <PersonLayout
        onClick={onClickPerson}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onTouchStart={() => setIsShown(true)}
        onTouchEnd={() => setIsShown(false)}
      >
        <Image width={154} path={profile_path} />
        {isShown && (
          <Content>
            <Name>{name}</Name>
            <Info>{department || character || known_for_department}</Info>
          </Content>
        )}
      </PersonLayout>
    );

  return (
    <PersonLayout
      onClick={onClickPerson}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onTouchStart={() => setIsShown(true)}
      onTouchEnd={() => setIsShown(false)}
    >
      <Image width={154} path={profile_path} />
      <Content>
        <Name>{name}</Name>
        {isShown && <Info>{department || character || known_for_department}</Info>}
      </Content>
    </PersonLayout>
  );
}

export default memo(Person);
