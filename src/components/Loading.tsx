import logo from 'assets/naeflix-logo.png';
import styled from 'styled-components';

const LoadginLayout = styled.div`
  ${({ theme }) => theme.flex.center}
  background: black;
  height: 100vh;
`;

const Logo = styled.img`
  height: 130px;

  @media screen and (min-width: 550px) and (max-width: 950px) {
    height: 100px;
  }
  @media screen and (max-width: 550px) {
    height: 60px;
  }
`;

function Loading() {
  return (
    <LoadginLayout>
      <Logo src={logo} />
    </LoadginLayout>
  );
}

export default Loading;
