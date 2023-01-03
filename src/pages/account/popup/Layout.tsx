import styled from 'styled-components';

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: calc(100% - 70px);
  width: 100%;
  position: fixed;
  top: 70px;
  left: 0;
`;

const PopupLayout = styled.div`
  background-color: white;
  height: 500px;
  width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Background>
      <PopupLayout>{children}</PopupLayout>
    </Background>
  );
}

export default Layout;
