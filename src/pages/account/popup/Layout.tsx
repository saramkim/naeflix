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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-radius: 10px;

  height: 600px;
  width: 500px;
  padding: 50px;

  @media screen and (max-width: 550px) {
    height: 460px;
    width: 400px;
    padding: 30px;
    gap: 20px;
    max-width: 100%;
  }
`;

const ExitButton = styled.button`
  position: absolute;
  font-size: 40px;

  top: 30px;
  right: 30px;

  @media screen and (max-width: 550px) {
    top: 20px;
    right: 20px;
  }
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
