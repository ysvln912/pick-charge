import { useEffect, useState } from "react";

export const useDebounce = (value: string) => {
  const [debounceedValue, setDebouncedValue] = useState<string>();
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return debounceedValue;
};
