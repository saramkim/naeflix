import { AiOutlineCaretDown } from 'react-icons/ai';
import { RiGlobalFill } from 'react-icons/ri';
import styled from 'styled-components';

type Props = { list: string[]; fontSize: number; background?: string };

const SelectBoxLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Box = styled.select<{ fontSize: number; background?: string }>`
  position: relative;
  padding: 0.6em;
  width: 6.5em;
  font-size: ${({ fontSize }) => fontSize}px;
  border-color: inherit;
  border-radius: 0.2em;
  background: ${({ background }) => background || 'inherit'};
  color: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const OptionBox = styled.option<{ background?: string }>`
  background-color: ${({ background }) => background || 'black'};
  text-align: center;
`;

const Icon = styled.div<{ fontSize: number }>`
  font-size: ${({ fontSize }) => fontSize}px;
  position: absolute;
  display: flex;
  align-items: center;
  padding: 0.6em;
  width: 6.5em;
  justify-content: space-between;
  pointer-events: none;
`;

function SelectBox({ list, fontSize, background }: Props) {
  return (
    <SelectBoxLayout>
      <Box fontSize={fontSize} background={background}>
        {list.map((text) => (
          <OptionBox key={text} background={background}>
            {text}
          </OptionBox>
        ))}
      </Box>
      <Icon fontSize={fontSize}>
        <RiGlobalFill />
        <AiOutlineCaretDown />
      </Icon>
    </SelectBoxLayout>
  );
}

export default SelectBox;
