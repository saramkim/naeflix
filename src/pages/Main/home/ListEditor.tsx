import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Popup from 'components/Popup';
import { FlexColumn } from 'components/style/Flex';
import { getHomeList, updateHomeList } from 'firebases/firestore';
import { useData } from 'hooks/useData';
import styled from 'styled-components';
import { DATA, STYLE } from 'utils/constants';

import Checkbox from './Checkbox';

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 550px) {
    gap: 30px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  line-height: 36px;

  @media screen and (max-width: 550px) {
    font-size: 25px;
    line-height: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListWrapper = styled(FlexColumn)`
  gap: 10px;
`;

const Category = styled.span`
  color: ${STYLE.MAIN_COLOR};
  font-weight: bold;
  text-align: right;
`;

function ListEditor() {
  const [homeList, setHomeList] = useData({
    callback: getHomeList,
    initailValue: [],
    defaultValue: DATA.HOME_LIST,
  });
  const navigate = useNavigate();

  const onListChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateHomeList(homeList).then(() => {
      navigate('/main');
      window.location.reload();
    });
  };

  return (
    <Popup>
      <Form onSubmit={onListChange}>
        <Title>홈 목록 설정</Title>
        <Content>
          <ListWrapper>
            {DATA.HOME_LIST.map((category) => (
              <Checkbox
                category={category}
                setList={setHomeList}
                checked={homeList.includes(category)}
                key={category}
              />
            ))}
          </ListWrapper>
          <ListWrapper>
            {homeList.map((category) => (
              <Category key={category}>{DATA.CATEGORY_NAME[category]}</Category>
            ))}
          </ListWrapper>
        </Content>
        <Button fontSize={20} padding={16}>
          적용
        </Button>
      </Form>
    </Popup>
  );
}

export default ListEditor;
