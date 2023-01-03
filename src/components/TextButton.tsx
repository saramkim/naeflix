import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

type TextButtonProps = {
  children: React.ReactNode;
  fontSize: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  path?: string;
  color?: string;
};

const TextButtonLayout = styled.div<{ fontSize: number; color?: string }>`
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ fontSize }) => fontSize}px;
  width: fit-content;
  cursor: pointer;
  display: flex;
  align-items: center;
  line-height: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

function TextButton({ children, fontSize, color, path, onClick }: TextButtonProps) {
  const navigate = useNavigate();

  const onClickButton = () => {
    if (path) navigate(path);
  };

  return (
    <TextButtonLayout fontSize={fontSize} color={color} onClick={onClick || onClickButton}>
      {children}
    </TextButtonLayout>
  );
}

export default TextButton;
