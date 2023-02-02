import { forwardRef, useState } from 'react';

import styled from 'styled-components';

type InputProps = {
  onChange: React.ChangeEventHandler;
  label: string;
  warning: string;
  isValid: boolean;
  background?: string;
  type?: 'password';
};

const InputLayout = styled.div`
  width: 100%;
  position: relative;
`;

const InputBox = styled.input<{ isWrong: boolean; background?: string }>`
  width: 100%;
  padding: 16px 10px 0 10px;
  height: 60px;
  font-size: 20px;
  border: 1px solid ${({ isWrong }) => (isWrong ? '#ffa00a' : 'black')};
  border-radius: 3px;
  outline: none;
  background-color: ${({ background }) => background || 'white'};
  color: ${({ background }) => (background ? 'white' : 'black')}; ;
`;

const Label = styled.label<{ top: number; fontSize: number }>`
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: ${({ top }) => top}px;
  font-size: ${({ fontSize }) => fontSize}px;
  color: gray;
  transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
  transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease, -webkit-transform 0.1s ease,
    -moz-transform 0.1s ease, -o-transform 0.1s ease;
`;

const Warning = styled.div`
  color: #ffa00a;
  position: absolute;
  left: 0.4em;
  font-size: 15px;

  bottom: -1.5em;

  @media screen and (max-width: 550px) {
    bottom: -1.2em;
  }
`;

function Input(
  { onChange, label, warning, isValid, type, background }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const INITIAL_TOP = 20;
  const INITIAL_FONT_SIZE = 16;

  const [top, setTop] = useState(INITIAL_TOP);
  const [fontSize, setFontSize] = useState(INITIAL_FONT_SIZE);
  const isWrong = !isValid && top !== INITIAL_TOP;

  const onFocusInput = () => {
    setTop(7);
    setFontSize(11);
  };
  const onBlurInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value === '') {
      setTop(INITIAL_TOP);
      setFontSize(INITIAL_FONT_SIZE);
    }
  };

  return (
    <InputLayout>
      <InputBox
        ref={ref}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        onChange={onChange}
        isWrong={isWrong}
        type={type || 'text'}
        background={background}
      />
      <Label top={top} fontSize={fontSize}>
        {label}
      </Label>
      {isWrong && <Warning>{warning}</Warning>}
    </InputLayout>
  );
}

export default forwardRef(Input);
