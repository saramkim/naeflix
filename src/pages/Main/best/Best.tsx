import { useState } from 'react';

import styled from 'styled-components';

import Register from './Register';
import Selector from './Selector';

export const BestLayout = styled.div`
  ${({ theme }) => theme.flex.center};
  ${({ theme }) => theme.style.minHeight};
  background: radial-gradient(rgb(255, 255, 255), rgb(0, 0, 0));

  @media screen and (max-width: 550px) {
    background: radial-gradient(rgb(255, 255, 255), rgb(50, 50, 50));
  }
`;

function Best() {
  const [id, setId] = useState('');
  const [select, setSelect] = useState(true);

  if (id) return <Register id={id} setId={setId} setSelect={setSelect} />;

  return <BestLayout>{select && <Selector setSelect={setSelect} setId={setId} />}</BestLayout>;
}

export default Best;
