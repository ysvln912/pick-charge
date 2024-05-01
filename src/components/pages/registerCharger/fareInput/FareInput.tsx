import { ChangeEvent } from "react";
import * as S from "./FareInput.style";

interface FareInputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FareInput({ value, onChange }: FareInputProps) {
  return (
    <S.Container>
      <S.Input
        type="text"
        id="fare"
        name="fare"
        value={value ?? ""}
        onChange={onChange}
      />
      <S.Label htmlFor="fare">원/kWh</S.Label>
    </S.Container>
  );
}
