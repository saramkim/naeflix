import { useState } from 'react';

import styled from 'styled-components';

type InputProps = { value: string; onChange: React.ChangeEventHandler; label: string };

const InputLayout = styled.div`
  font-size: 20px;
  position: relative;
`;

const InputBox = styled.input`
  width: 450px;
  padding: 16px 10px 0 10px;
  height: 60px;
  font-size: 20px;
  border: none;
  border-radius: 1px;
  outline: none;
  background-color: white;
  color: black;
`;

const Label = styled.label<{ top: number; fontSize: number }>`
  position: absolute;
  left: 10px;
  top: ${({ top }) => top}px;
  font-size: ${({ fontSize }) => fontSize}px;
  color: gray;
  transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
  transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease, -webkit-transform 0.1s ease,
    -moz-transform 0.1s ease, -o-transform 0.1s ease;
`;

function Input({ value, onChange, label }: InputProps) {
  const [top, setTop] = useState(20);
  const [fontSize, setFontSize] = useState(16);

  const onFocusInput = () => {
    setTop(7);
    setFontSize(11);
  };
  const onBlurInput = () => {
    if (value === '') {
      setTop(20);
      setFontSize(16);
    }
  };

  return (
    <InputLayout>
      <InputBox onFocus={onFocusInput} onBlur={onBlurInput} value={value} onChange={onChange} />
      <Label top={top} fontSize={fontSize}>
        {label}
      </Label>
    </InputLayout>
  );
}

export default Input;
