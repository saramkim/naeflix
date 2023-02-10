import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import Popup from 'components/Popup';
import { updateHomeList } from 'firebases/firestore';
import { useHomeList } from 'hooks/useHomeList';
import { useMediaQuery } from 'react-responsive';
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

const Context = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Category = styled.span`
  color: ${STYLE.MAIN_COLOR};
  font-weight: bold;
  text-align: right;
`;

function ListEditor() {
  const { list, setList } = useHomeList();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });

  const onListChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateHomeList(list).then(() => {
      navigate('/main');
      window.location.reload();
    });
  };

  return (
    <Popup>
      <Form onSubmit={onListChange}>
        <Title>홈 목록 설정</Title>
        <Context>
          <ListWrapper>
            {DATA.HOME_LIST.map((category) => (
              <Checkbox
                category={category}
                setList={setList}
                checked={list.includes(category)}
                key={category}
              />
            ))}
          </ListWrapper>
          <ListWrapper>
            {list &&
              list.map((category) => (
                <Category key={category}>{DATA.CATEGORY_NAME[category]}</Category>
              ))}
          </ListWrapper>
        </Context>
        <Button fontSize={isMobile ? 16 : 20} padding={isMobile ? '12px' : '16px'}>
          적용
        </Button>
      </Form>
    </Popup>
  );
}

export default ListEditor;
