import React from "react";
import { ChangeEvent } from "react";
import Input from "@/components/common/input/input";

interface DetailedAddressProps {
  label: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
}
export default function DetailedAddress({
  placeholder,
  label,
  name,
  value,
  onChange,
}: DetailedAddressProps) {
  return (
    <Input>
      <Input.Label htmlFor={name}>{label}</Input.Label>
      <Input.Base>
        <Input.Center
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
        />
      </Input.Base>
    </Input>
  );
}
