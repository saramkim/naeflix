import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import Cast from './Cast';
import Crew from './Crew';
import PersonInfo from './PersonInfo';

const PersonDetailLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Credits = styled.div`
  border-top: 1px solid rgb(80, 80, 80);
  padding: 50px 0 50px 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (max-width: 550px) {
    padding-left: 30px;
  }
`;

function PersonDetail() {
  const id = useParams().id!;

  return (
    <PersonDetailLayout>
      <PersonInfo id={id} />
      <Credits>
        <Cast id={id} direction='horizontal' />
        <Crew id={id} direction='horizontal' />
      </Credits>
    </PersonDetailLayout>
  );
}

export default PersonDetail;
