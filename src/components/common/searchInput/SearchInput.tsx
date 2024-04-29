import Input from "@/components/common/input/input";
import SearchIcon from "@/components/common/icons/SearchIcon";
import ErrorMessage from "@/components/common/errorMessage/ErrorMessage";
import { ChangeEvent, FocusEvent } from "react";

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
}

export default function SearchInput({
  label,
  require = false,
  placeholder,
  onChange,
  onFocus,
  error = false,
  name,
  errorMessage,
  value,
}: SearchInputProps) {
  return (
    <Input>
      {label && <Input.Label require={require}>{label}</Input.Label>}
      <Input.Base color="primary">
        <Input.Left>
          <SearchIcon />
        </Input.Left>
        <Input.Center
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          name={name}
          value={value || ""}
        />
      </Input.Base>
      <ErrorMessage visible={!!error}>{errorMessage || error}</ErrorMessage>
    </Input>
  );
}
