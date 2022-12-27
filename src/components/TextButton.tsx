import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

type TextButtonProps = {
  children: React.ReactNode;
  fontSize: number;
  color?: string;
  path: string;
};

const TextButtonLayout = styled.div<{ fontSize: number; color?: string }>`
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ fontSize }) => fontSize}px;
  width: fit-content;
  cursor: pointer;
  display: flex;
  align-items: center;
  &: hover {
    text-decoration: underline;
  }
`;

function TextButton({ children, fontSize, color, path }: TextButtonProps) {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(path);
  };

  return (
    <TextButtonLayout fontSize={fontSize} color={color} onClick={onClickButton}>
      {children}
    </TextButtonLayout>
  );
}

export default TextButton;