import React from "react";
import { ChangeEvent } from "react";
import Input from "@/components/common/input/input";
import ErrorMessage from "@/components/common/errorMessage/ErrorMessage";

interface DetailedAddressProps {
  label: string;
  placeholder?: string;
  error?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  errorMessage?: string;
}
export default function DetailedAddress({
  placeholder,
  label,
  error,
  name,
  value,
  errorMessage,
  onChange,
}: DetailedAddressProps) {
  return (
    <Input>
      <Input.Label htmlFor={name}>{label}</Input.Label>
      <Input.Base error={error}>
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
