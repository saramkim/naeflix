import { useState } from 'react';

import styled from 'styled-components';
import { STYLE } from 'utils/constants';

import Register from './Register';
import Selector from './Selector';

const NoBestLayout = styled.div`
  height: ${STYLE.HEIGHT_WITHOUT_HEADER};
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(rgb(255, 255, 255), rgb(0, 0, 0));

  @media screen and (max-width: 550px) {
    background: radial-gradient(rgb(255, 255, 255), rgb(50, 50, 50));
  }
`;

const NoBest = styled.div`
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  width: 342px;
  height: 513px;
  max-width: 100vw;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);

  &:hover {
    box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.8);
  }

  @media screen and (max-width: 550px) {
    width: 280px;
    height: 420px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
  }
`;

function Best() {
  const [id, setId] = useState('');
  const [select, setSelect] = useState(false);

  if (id) return <Register id={id} setId={setId} />;

  return (
    <NoBestLayout>
      <NoBest onClick={() => setSelect(true)} />
      {select && <Selector setSelect={setSelect} setId={setId} />}
    </NoBestLayout>
  );
}

export default Best;
