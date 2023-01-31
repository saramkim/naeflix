import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CreditsDataType } from 'api/movieData';
import styled from 'styled-components';
import { MOVIE } from 'utils/constants';

const PROFILE_WIDTH = 154;

const PersonLayout = styled.div`
  position: relative;
  cursor: pointer;
  width: ${PROFILE_WIDTH}px;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  display: flex;
  width: ${PROFILE_WIDTH}px;
  min-height: 220px;
`;

const Profile = styled.img``;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  padding: 10px;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
`;

const Name = styled.h1`
  text-align: center;
  line-height: 30px;
`;

const Info = styled.span`
  font-size: 20px;
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
    >
      <Profile src={MOVIE.IMG_BASE_URL(PROFILE_WIDTH) + profile_path} alt='Person-Profile' />
      {isShown && (
        <Content>
          <div />
          <Name>{name}</Name>
          <Info>{department || character || known_for_department}</Info>
        </Content>
      )}
    </PersonLayout>
  );
}

export default Person;
