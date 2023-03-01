import { useState } from 'react';

import styled from 'styled-components';
import { STYLE } from 'utils/constants';

type SelectBoxType = {
  children: React.ReactNode[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
  fontSize: number;
  top: number;
  right: number;
};

const GenreSelectorLayout = styled.select<{ fontSize: number; top: number; right: number }>`
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  position: absolute;
  top: ${({ top }) => top}px;
  right: ${({ right }) => right}px;
  padding: 0.75rem;
  border-radius: 0.3em;
  background-color: ${STYLE.ACCOUNT_COLOR};
  border: none;
  font-family: inherit;
  font-size: ${({ fontSize }) => fontSize}px;
  cursor: pointer;
  text-align: center;

  &::-ms-expand {
    display: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    outline: none;
    padding: 0.75rem 0.62rem;
  }
  &:hover,
  &:focus,
  & > option:checked,
  & > option:hover {
    font-weight: 600;
  }

  @media screen and (max-width: 550px) {
    font-size: 16px;
    top: ${({ top }) => top * 0.8}px;
    right: ${({ right }) => right * 0.8}px;
  }
`;

function SelectBox({ children, setValue, fontSize, top, right }: SelectBoxType) {
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
    >
      {children}
    </GenreSelectorLayout>
  );
}

export default SelectBox;
