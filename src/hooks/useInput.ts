import { useState } from 'react';

export const useInput = (ref: React.RefObject<HTMLInputElement>, regExp: RegExp) => {
  const [isValid, setIsValid] = useState(false);

  const onChange = () => {
    if (ref.current?.value.match(regExp)) setIsValid(true);
    else setIsValid(false);
  };

  return {
    onChange,
    isValid,
  };
};
