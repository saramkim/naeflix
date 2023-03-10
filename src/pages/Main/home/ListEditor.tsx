import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Popup from 'components/Popup';
import { getHomeList, updateHomeList } from 'firebases/firestore';
import { useData } from 'hooks/useData';
import styled from 'styled-components';
import { DATA } from 'utils/constants';

import ListCheck from './ListCheck';

const Form = styled.form`
  ${({ theme }) => theme.flex.column};
  width: 100%;
  gap: 30px;

  @media screen and (max-width: 550px) {
    gap: 30px;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.font(35)};
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListWrapper = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 10px;
`;

const Category = styled.span`
  color: ${({ theme }) => theme.color.main};
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
              <ListCheck
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
