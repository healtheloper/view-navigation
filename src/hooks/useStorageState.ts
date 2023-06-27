import { SetStateAction, useCallback, useState } from 'react';

type StorageStateOption<T> = {
  defaultValue?: T;
};

type StorageStateOptionWithDefaultValue<T> = {
  defaultValue: T;
};

function useStorageState<T>(
  key: string,
  { defaultValue }: StorageStateOptionWithDefaultValue<T>
): [T, (value: SetStateAction<T>) => void];

function useStorageState<T>(
  key: string,
  { defaultValue }: StorageStateOption<T>
) {
  const getValue = useCallback(() => {
    const value = localStorage.getItem(key);
    if (value && value !== 'undefined') {
      return JSON.parse(value) as T;
    }
    return defaultValue;
  }, [key, defaultValue]);

  const [state, setState] = useState(getValue);

  const setValue = useCallback(
    (value: SetStateAction<T | undefined>) => {
      setState((prev) => {
        const next = value instanceof Function ? value(prev) : value;
        localStorage.setItem(key, JSON.stringify(next));
        return next;
      });
    },
    [key]
  );

  return [state, setValue];
}

export default useStorageState;
