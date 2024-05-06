import { ChangeEvent } from "react";
import * as S from "./SpeedRadioBtn.style";

export interface SpeedRadioBtnProps {
  id: "fast" | "slow";
  value: "급속" | "완속";
  selectedOption: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function SpeedRadioBtn({
  id,
  value,
  selectedOption,
  onChange,
}: SpeedRadioBtnProps) {
  return (
    <S.Container>
      <S.FakeRadioButton
        htmlFor={id}
        checked={selectedOption === value}
      ></S.FakeRadioButton>
      <S.RadioInput
        type="radio"
        name="speed"
        id={id}
        value={value}
        onChange={onChange}
      />
      <S.Label htmlFor={id}>{value}</S.Label>
    </S.Container>
  );
}
