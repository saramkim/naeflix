import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { STYLE } from 'utils/constants';

type ButtonProps = {
  children: string;
  fontSize: number;
  padding?: number;
  fix?: boolean;
  background?: string;
  path?: string;
  hover?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonLayout = styled.button<ButtonProps>`
  background-color: ${({ background }) => background || STYLE.MAIN_COLOR};
  font-size: ${({ fontSize }) => fontSize}px;
  padding: ${({ padding }) => (padding ? `${padding}px` : '0.5rem 1rem')};
  border-radius: 3px;
  color: white;

  &:hover {
    background-color: ${({ hover }) => hover && 'rgb(246, 18, 29)'};
  }

  @media screen and (max-width: 550px) {
    font-size: ${({ fontSize, fix }) => !fix && fontSize * 0.8}px;
    padding: ${({ padding, fix }) => padding && !fix && padding * 0.8}px;
  }
`;

function Button({
  children,
  fontSize,
  padding,
  fix,
  background,
  path,
  hover,
  onClick,
}: ButtonProps) {
  const navigate = useNavigate();

  const onClickButton = () => {
    if (path) navigate(path);
  };

  return (
    <ButtonLayout
      fontSize={fontSize}
      padding={padding}
      fix={fix}
      background={background}
      hover={hover}
      onClick={onClick || onClickButton}
    >
      {children}
    </ButtonLayout>
  );
}

export default Button;
