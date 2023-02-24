import { getPersonData } from 'api/personData';
import Image from 'components/Image';
import { Font45 } from 'components/style/FontSize';
import { useData } from 'hooks/useData';
import { Backdrop, Content, InfoLayout } from 'pages/Main/InfoLayout';

import Info from './Info';

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
            <Font45>{name}</Font45>
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
  return null;
}

export default PersonInfo;
