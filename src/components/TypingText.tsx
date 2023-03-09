import { useEffect, useState } from 'react';

import styled from 'styled-components';

type TypingTextType = { children: string; term: number; fontSize: number };

const Text = styled.h1<{ fontSize: number }>`
  line-height: 1.2em;
  font-size: ${({ fontSize }) => fontSize}px;

  @media screen and (min-width: 550px) and (max-width: 950px) {
    font-size: ${({ fontSize }) => fontSize * 0.8}px;
  }
  @media screen and (max-width: 550px) {
    font-size: ${({ fontSize }) => fontSize * 0.6}px;
  }
`;

function TypingText({ children, term, fontSize }: TypingTextType) {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((v) => v + children[count]);
      setCount((v) => v + 1);
    }, term);
    if (count === children.length) clearInterval(interval);

    return () => clearInterval(interval);
  });

  return <Text fontSize={fontSize}>{text}</Text>;
}

export default TypingText;
