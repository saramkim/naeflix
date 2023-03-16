import { useEffect, useState } from 'react';

type UseDataType<T> = {
  callback(id?: string): Promise<T>;
  initailValue: T;
  id?: string;
  defaultValue?: T;
};
type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useData = <T>({
  callback,
  initailValue,
  id,
  defaultValue,
}: UseDataType<T>): ReturnType<T> => {
  const [data, setData] = useState<T>(initailValue);

  useEffect(() => {
    (async () => {
      const value = await callback(id);
      if (value) setData(value);
      else setData(defaultValue || initailValue);
    })();
  }, [id]);

  return [data, setData];
};
