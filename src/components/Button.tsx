import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

type ButtonProps = {
  children: string;
  fontSize: number;
  path?: string;
  hover?: string;
};

const ButtonLayout = styled.button<{ fontSize: number; hover?: string }>`
  background-color: #e50914;
  font-size: ${({ fontSize }) => fontSize}px;
  padding: 0.4em 1em;
  border-radius: 3px;
  color: inherit;

  &:hover {
    background-color: ${({ hover }) => hover || '#e50914'};
  }
`;

function Button({ children, fontSize, path, hover }: ButtonProps) {
  const navigate = useNavigate();

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (path) navigate(path);
  };

  return (
    <ButtonLayout fontSize={fontSize} hover={hover} onClick={onClickButton}>
      {children}
    </ButtonLayout>
  );
}

export default Button;
