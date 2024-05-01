import { ChangeEvent, useEffect, useRef } from "react";
import * as S from "./FareInput.style";
import ErrorMessage from "@/components/common/errorMessage/ErrorMessage";

interface FareInputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  errorMessage: string;
}

export default function FareInput({
  value,
  onChange,
  error,
  errorMessage,
}: FareInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (error && inputRef.current) {
      inputRef.current.focus();
    }
  }, [error]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.currentTarget.value;
    if (!/^\d*\.?\d*$/.test(inputValue)) {
      inputValue = inputValue.replace(/[^-.0-9]/g, "");
    }
    if (onChange) {
      event.currentTarget.value = inputValue;
      onChange(event);
    }
  };

  return (
    <>
      <S.Container>
        <S.Input
          ref={inputRef}
          type="text"
          id="fare"
          name="fare"
          value={value ?? ""}
          onChange={handleChange}
        />
        <S.Label htmlFor="fare">원/kWh</S.Label>
      </S.Container>
      <ErrorMessage visible={!!error}>{errorMessage || error}</ErrorMessage>
    </>
  );
}
