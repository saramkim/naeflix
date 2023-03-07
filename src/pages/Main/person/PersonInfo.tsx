import { getPersonData } from 'api/personData';
import Image from 'components/Image';
import Loading from 'components/Loading';
import { useData } from 'hooks/useData';
import { Backdrop, Content, InfoLayout } from 'pages/Main/InfoLayout';
import styled from 'styled-components';

import Info from './Info';

const Name = styled.h1`
  ${({ theme }) => theme.font(45)}
`;

function PersonInfo({ id }: { id: string }) {
  const [personData] = useData({
    callback: getPersonData,
    initailValue: null,
    id,
  });

  if (personData) {
    const { profile_path, name, known_for_department, birthday, deathday, place_of_birth } =
      personData;

    return (
      <Backdrop heigth='615px'>
        <InfoLayout>
          <Image width={342} path={profile_path} />
          <Content gap={30}>
            <Name>{name}</Name>
            <Info title='활동 분야'>{known_for_department}</Info>
            <Info title='출생'>
              {birthday ? birthday.toString() : 'unknown'}
              <br />
              {place_of_birth}
            </Info>
            {deathday && <Info title='사망'>{deathday.toString()}</Info>}
          </Content>
        </InfoLayout>
      </Backdrop>
    );
  }

  return <Loading />;
}

export default PersonInfo;
