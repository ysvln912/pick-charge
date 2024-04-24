import Input from "@/components/common/input/input";
import SearchIcon from "@/components/common/icons/SearchIcon";
import ErrorMessage from "@/components/common/errorMessage/ErrorMessage";
import { ChangeEvent } from "react";

interface SearchInputProps {
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  result?: string;
}

export default function SearchInput({
  label,
  placeholder,
  onChange,
  error,
  name,
  errorMessage,
  value,
}: SearchInputProps) {
  return (
    <Input>
      {label && <Input.Label>{label}</Input.Label>}
      <Input.Base color="primary">
        <Input.Left>
          <SearchIcon />
        </Input.Left>
        <Input.Center
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        />
      </Input.Base>
      <ErrorMessage visible={error}>{errorMessage}</ErrorMessage>
    </Input>
  );
}
