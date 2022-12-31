import { useState } from 'react';

export function useInput(ref: React.RefObject<HTMLInputElement>, regExp: RegExp) {
  const [isCorrect, setIsCorrect] = useState(false);

  const onChange = () => {
    if (ref.current?.value.match(regExp)) setIsCorrect(true);
    else setIsCorrect(false);
  };

  return {
    onChange,
    isCorrect,
  };
}
