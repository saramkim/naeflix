import styled from 'styled-components';

type Props = { list: string[]; fontSize: number };

const Box = styled.select<{ fontSize: number }>`
  padding: 0.6em 0;
  width: 6em;
  font-size: ${({ fontSize }) => fontSize}px;
  border-color: inherit;
  border-radius: 0.2em;
  background: none;
  color: inherit;
`;

const OptionBox = styled.option`
  background-color: black;
`;

function SelectBox({ list, fontSize }: Props) {
  return (
    <Box fontSize={fontSize}>
      {list.map((text) => (
        <OptionBox key={text}>{text}</OptionBox>
      ))}
    </Box>
  );
}

export default SelectBox;
