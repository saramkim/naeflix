import { useParams } from 'react-router-dom';

import Loading from 'components/Loading';
import { usePersonData } from 'hooks/usePersonData';
import styled from 'styled-components';
import { MOVIE } from 'utils/constants';

import HorizontalContainer from '../HorizontalContainer';
import Movie from '../Movie';

import Info from './Info';

const PersonDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const PersonInfo = styled.div`
  max-width: 1280px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 50px;
  gap: 50px;
`;

const Profile = styled.img`
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Name = styled.h1`
  flex-wrap: wrap;
  font-size: 50px;
  width: fit-content;
`;

const Credits = styled.div`
  border-top: 1px solid rgb(80, 80, 80);
  padding: 50px 0 50px 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

function PersonDetail() {
  const id = useParams().id!;
  const personData = usePersonData(id);

  if (personData) {
    const {
      profile_path,
      name,
      known_for_department,
      birthday,
      deathday,
      place_of_birth,
      cast,
      crew,
    } = personData;

    return (
      <PersonDetailLayout>
        <PersonInfo>
          <Profile src={MOVIE.IMG_BASE_URL(342) + profile_path} />
          <Content>
            <Name>{name}</Name>
            <Info title='활동 분야'>{known_for_department}</Info>
            <Info title='출생'>
              {birthday ? birthday.toString() : 'unknown'}
              <br />
              {place_of_birth}
            </Info>
            {deathday && <Info title='사망'>{deathday.toString()} </Info>}
          </Content>
        </PersonInfo>

        <Credits>
          <HorizontalContainer category='cast' viewAll={false}>
            {cast.map((data) => (
              <Movie {...data} key={data.id} />
            ))}
          </HorizontalContainer>
          {crew.length !== 0 && (
            <HorizontalContainer category='crew' viewAll={false}>
              {crew.map((data) => (
                <Movie {...data} key={data.id} />
              ))}
            </HorizontalContainer>
          )}
        </Credits>
      </PersonDetailLayout>
    );
  }

  return <Loading />;
}

export default PersonDetail;
