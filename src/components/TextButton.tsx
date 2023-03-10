import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

type TextButtonProps = {
  children: React.ReactNode;
  fontSize?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  path?: string;
  state?: { [key: string]: string };
  color?: string;
  hover?: 'opacity';
  stopPropagation?: boolean;
};

const TextButtonLayout = styled.div<{ fontSize?: number; color?: string; hover?: 'opacity' }>`
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ fontSize }) => `${fontSize}px` || 'inherit'};
  width: fit-content;
  cursor: pointer;
  line-height: 1rem;

  &:hover {
    ${({ hover }) => (hover ? 'opacity: 0.8' : 'text-decoration: underline')}
  }
`;

function TextButton({
  children,
  fontSize,
  onClick,
  path,
  state,
  color,
  hover,
  stopPropagation,
}: TextButtonProps) {
  const navigate = useNavigate();

  const onClickButton = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (stopPropagation) e.stopPropagation();
    if (path) {
      if (state) navigate(path, { state });
      else navigate(path);
    }
  };

  return (
    <TextButtonLayout
      fontSize={fontSize}
      color={color}
      onClick={onClick || onClickButton}
      hover={hover}
    >
      {children}
    </TextButtonLayout>
  );
}

export default TextButton;
