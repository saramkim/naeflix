import { useEffect, useState } from 'react';

type useDataType<T> = {
  callback(id?: string): Promise<T>;
  initailValue: T;
  id?: string;
  defaultValue?: T;
};
type ReturnTypes<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useData = <T>({
  callback,
  initailValue,
  id,
  defaultValue,
}: useDataType<T>): ReturnTypes<T> => {
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
