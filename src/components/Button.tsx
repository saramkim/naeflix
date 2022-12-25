import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

type ButtonProps = {
  children: string;
  fontSize: number;
  path?: string;
};

const Btn = styled.button<{ fontSize: number }>`
  background-color: #e50914;
  font-size: ${({ fontSize }) => fontSize}px;
  padding: 0.4em 1em;
  border-radius: 3px;
  color: inherit;
`;

function Button({ children, fontSize, path }: ButtonProps) {
  const navigate = useNavigate();

  return (
    <Btn
      fontSize={fontSize}
      onClick={(e) => {
        e.preventDefault();
        if (path) navigate(path);
      }}
    >
      {children}
    </Btn>
  );
}

export default Button;
