import styled from 'styled-components';

import LoginForm from './LoginForm';

const BodyLayout = styled.div`
  height: calc(100vh - 160px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 550px) {
    height: auto;
  }
`;

function Body() {
  return (
    <BodyLayout>
      <LoginForm />
    </BodyLayout>
  );
}

export default Body;
