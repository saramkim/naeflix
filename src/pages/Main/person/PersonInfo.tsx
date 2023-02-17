import { getPersonData } from 'api/personData';
import Image from 'components/Image';
import { useData } from 'hooks/useData';
import styled from 'styled-components';

import Info from './Info';

const PersonInfoLayout = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 30px 50px;

  height: 600px;
  padding: 50px;

  @media screen and (max-width: 950px) {
    height: auto;
    flex-direction: column;
  }
  @media screen and (max-width: 550px) {
    padding: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 950px) {
    gap: 20px;
  }
`;

const Name = styled.h1`
  flex-wrap: wrap;
  width: fit-content;

  font-size: 45px;
  line-height: 55px;

  @media screen and (max-width: 550px) {
    font-size: 35px;
    line-height: 42px;
  }
`;

function PersonInfo({ id }: { id: string }) {
  const { data: personData } = useData({
    callback: getPersonData,
    initailValue: null,
    id,
  });

  if (personData) {
    const { profile_path, name, known_for_department, birthday, deathday, place_of_birth } =
      personData;

    return (
      <PersonInfoLayout>
        <Image width={342} path={profile_path} />
        <Content>
          <Name>{name}</Name>
          <Info title='활동 분야'>{known_for_department}</Info>
          <Info title='출생'>
            {birthday ? birthday.toString() : 'unknown'}
            <br />
            {place_of_birth}
          </Info>
          {deathday && <Info title='사망'>{deathday.toString()}</Info>}
        </Content>
      </PersonInfoLayout>
    );
  }
  return null;
}

export default PersonInfo;
