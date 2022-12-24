import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

type ButtonProps = {
  children: string;
  fontSize: number;
  path: string;
};

const Btn = styled.button<{ fontSize: number }>`
  background-color: #e50914;
  font-size: ${({ fontSize }) => fontSize}px;
  padding: 0.5em 0;
  width: 5em;
  border-radius: 5px;
  color: inherit;
`;

function Button({ children, fontSize, path }: ButtonProps) {
  const navigate = useNavigate();

  return (
    <Btn fontSize={fontSize} onClick={() => navigate(path)}>
      {children}
    </Btn>
  );
}

export default Button;
