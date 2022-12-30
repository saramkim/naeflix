import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { STYLE } from 'utils/constants';

type ButtonProps = {
  children: string;
  fontSize: number;
  padding?: string;
  path?: string;
  hover?: boolean;
};

const ButtonLayout = styled.button<{ fontSize: number; padding?: string; hover?: boolean }>`
  background-color: ${STYLE.MAIN_COLOR};
  font-size: ${({ fontSize }) => fontSize}px;
  padding: ${({ padding }) => padding || '0.4em 1em'};
  border-radius: 3px;
  color: white;

  &:hover {
    background-color: ${({ hover }) => (hover ? 'rgb(246, 18, 29)' : STYLE.MAIN_COLOR)};
  }
`;

function Button({ children, fontSize, padding, path, hover }: ButtonProps) {
  const navigate = useNavigate();

  const onClickButton = () => {
    if (path) navigate(path);
  };

  return (
    <ButtonLayout fontSize={fontSize} padding={padding} hover={hover} onClick={onClickButton}>
      {children}
    </ButtonLayout>
  );
}

export default Button;
