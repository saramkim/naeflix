import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { STYLE } from 'utils/constants';

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const PopupLayout = styled.div`
  background-color: ${STYLE.ACCOUNT_COLOR};
  color: black;
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
  max-width: 100%;

  min-height: 600px;
  min-width: 500px;
  padding: 50px;

  @media screen and (max-width: 550px) {
    min-height: 460px;
    min-width: 400px;
    padding: 30px;
    gap: 20px;
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

function Popup({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <Background>
      <PopupLayout>
        {children}
        <ExitButton onClick={() => navigate(-1)}>X</ExitButton>
      </PopupLayout>
    </Background>
  );
}

export default Popup;
