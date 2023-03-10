import { useState } from 'react';

import styled from 'styled-components';

type SelectBoxType = {
  children: React.ReactNode[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
  fontSize: number;
  top: number;
  right: number;
  defaultValue: string;
};

const GenreSelectorLayout = styled.select<{ fontSize: number; top: number; right: number }>`
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: ${({ theme }) => theme.color.lightGray};
  position: absolute;
  padding: 0.75rem;
  border-radius: 0.3em;
  border: none;
  font-family: inherit;
  cursor: pointer;
  text-align: center;
  top: ${({ top }) => top}px;
  right: ${({ right }) => right}px;
  font-size: ${({ fontSize }) => fontSize}px;
  min-width: 120px;

  &::-ms-expand {
    display: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    outline: none;
  }
  &:hover,
  &:focus,
  & > option:checked,
  & > option:hover {
    font-weight: 600;
  }

  @media screen and (max-width: 550px) {
    top: ${({ top }) => top * 0.8}px;
    right: ${({ right }) => right * 0.8}px;
    font-size: ${({ fontSize }) => fontSize * 0.8}px;
    min-width: 95px;
  }
`;

function SelectBox({ children, setValue, fontSize, top, right, defaultValue }: SelectBoxType) {
  const [selectorSize, setSelectorSize] = useState(1);

  const onFocus = (e: React.FocusEvent<HTMLSelectElement, Element>) => {
    if (e.target.childElementCount > 7) setSelectorSize(7);
    else setSelectorSize(e.target.childElementCount);
  };
  const onBlur = () => setSelectorSize(1);
  const onChange = (e: React.FocusEvent<HTMLSelectElement, Element>) => {
    onBlur();
    e.target.blur();
    setValue(e.target.value);
  };

  return (
    <GenreSelectorLayout
      size={selectorSize}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      fontSize={fontSize}
      top={top}
      right={right}
      defaultValue={defaultValue}
    >
      {children}
    </GenreSelectorLayout>
  );
}

export default SelectBox;
