import styled from 'styled-components';

import LoginForm from './LoginForm';

const BodyLayout = styled.div`
  ${({ theme }) => theme.flex.center}
  ${({ theme }) => theme.style.borderBottom};
  height: calc(100vh - 160px);

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
