import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import Cast from './Cast';
import Crew from './Crew';
import PersonInfo from './PersonInfo';

const PersonDetailLayoyt = styled.div`
  ${({ theme }) => theme.flex.column};
`;

const Credits = styled.div`
  ${({ theme }) => theme.flex.column};
  border-top: 1px solid rgb(80, 80, 80);
  gap: 50px;
  padding: 50px 0 50px 50px;

  @media screen and (max-width: 550px) {
    padding-left: 30px;
  }
`;

function PersonDetail() {
  const id = useParams().id!;

  return (
    <PersonDetailLayoyt>
      <PersonInfo id={id} />
      <Credits>
        <Cast id={id} direction='horizontal' />
        <Crew id={id} direction='horizontal' />
      </Credits>
    </PersonDetailLayoyt>
  );
}

export default PersonDetail;
