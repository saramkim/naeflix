import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const PopupLayout = styled.div`
  background-color: white;
  height: 600px;
  width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 30px;
`;

const ExitButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 40px;
`;

function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/account', { replace: true });
  };

  return (
    <Background>
      <PopupLayout>
        {children}
        <ExitButton onClick={onClickButton}>X</ExitButton>
      </PopupLayout>
    </Background>
  );
}

export default Layout;
