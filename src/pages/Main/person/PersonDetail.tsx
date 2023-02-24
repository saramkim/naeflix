import { useParams } from 'react-router-dom';

import { FlexColumn } from 'components/style/Flex';
import styled from 'styled-components';

import Cast from './Cast';
import Crew from './Crew';
import PersonInfo from './PersonInfo';

const Credits = styled(FlexColumn)`
  border-top: 1px solid rgb(80, 80, 80);
  padding: 50px 0 50px 50px;
  gap: 50px;

  @media screen and (max-width: 550px) {
    padding-left: 30px;
  }
`;

function PersonDetail() {
  const id = useParams().id!;

  return (
    <FlexColumn>
      <PersonInfo id={id} />
      <Credits>
        <Cast id={id} direction='horizontal' />
        <Crew id={id} direction='horizontal' />
      </Credits>
    </FlexColumn>
  );
}

export default PersonDetail;
