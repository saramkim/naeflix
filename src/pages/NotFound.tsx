import Logo from 'components/Logo';
import styled from 'styled-components';

const NotFoundLayout = styled.div`
  ${({ theme }) => theme.flex.columnCenter}
  background: black;
  color: white;
  height: 100vh;
  gap: 80px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 80px;
`;

const Text = styled.span`
  font-size: 50px;
  text-align: center;
`;

function NotFound() {
  return (
    <NotFoundLayout>
      <Title>404</Title>
      <Text>해당 페이지를 찾을 수 없습니다.</Text>
      <Logo height='100' path='/main' />
    </NotFoundLayout>
  );
}

export default NotFound;
