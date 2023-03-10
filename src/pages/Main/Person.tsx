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
  ${({ theme }) => theme.flex.spaceBetween};
  background: rgba(0, 0, 0, 0.7);
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
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
  pointer-events: none;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  line-height: 30px;

  @media screen and (max-width: 550px) {
    line-height: 20px;
  }
`;

const Info = styled.div`
  ${({ theme }) => theme.font(20)}
  text-align: center;
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

  return (
    <PersonLayout
      onClick={onClickPerson}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onTouchStart={() => setIsShown(true)}
      onTouchEnd={() => setIsShown(false)}
    >
      <Image width={154} path={profile_path} />
      {profile_path ? (
        isShown && (
          <Content>
            <Name>{name}</Name>
            <Info>{department || character || known_for_department}</Info>
          </Content>
        )
      ) : (
        <Content>
          <Name>{name}</Name>
          {isShown && <Info>{department || character || known_for_department}</Info>}
        </Content>
      )}
    </PersonLayout>
  );
}

export default memo(Person);
