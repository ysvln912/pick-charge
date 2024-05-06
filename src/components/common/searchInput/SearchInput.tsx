import { ChangeEvent, FocusEvent } from "react";

import { ColorType } from "@/types";
import Input from "@/components/common/input/input";
import SearchIcon from "@/components/common/icons/SearchIcon";
import ErrorMessage from "@/components/common/errorMessage/ErrorMessage";

export interface SearchInputProps {
  require?: boolean;
  label?: string;
  placeholder?: string;
  error?: boolean | string;
  errorMessage?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string | null;
  color?: ColorType;
  readOnly? : boolean;
}

export default function SearchInput({
  label,
  require = false,
  placeholder,
  onChange,
  onFocus,
  error = false,
  color = "primary",
  name,
  errorMessage,
  value,
  readOnly=false,
}: SearchInputProps) {
  return (
    <Input>
      {label && <Input.Label require={require}>{label}</Input.Label>}
      <Input.Base color={color}>
        <Input.Left>
          <SearchIcon />
        </Input.Left>
        <Input.Center
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          name={name}
          value={value || ""}
          readOnly={readOnly}
        />
      </Input.Base>
      <ErrorMessage visible={!!error}>{errorMessage || error}</ErrorMessage>
    </Input>
  );
}
