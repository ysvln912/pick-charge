import { useState, useEffect } from "react";

interface UseSelectProps {
  defaultValue: string | null;
  value: string | null;
}

export const useSelect = ({ defaultValue, value }: UseSelectProps) => {
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const onSelect = (value: string) => {
    setSelected(value);
  };

  return { selected, onSelect };
};
