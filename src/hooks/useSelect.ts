import { useState } from "react";

interface UseSelectProps {
  defaultValue: string;
}

export const useSelect = ({ defaultValue }: UseSelectProps) => {
  const [selected, setSelected] = useState(defaultValue);

  const onSelect = (value: string) => {
    setSelected(value);
  };

  return { selected, onSelect };
};
