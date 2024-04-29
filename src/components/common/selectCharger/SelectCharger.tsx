import { MouseEvent } from "react";

import Label from "../label/Label";
import Select from "../select/Select";
import { SelectOptionsType } from "@/components/common/select/Select";

const fastOptions: SelectOptionsType[] = [
  { DC콤보: "DC콤보" },
  { DC차데모: "DC차데모" },
  { AC3상: "AC3상" },
  { 수퍼차저: "수퍼차저" },
];

const slowOptions: SelectOptionsType[] = [
  { 데스티네이션: "데스티네이션" },
  { 완속: "완속" },
];

interface SelectChargerProps {
  disabled?: boolean;
  label?: boolean;
  type?: string;
  require?: boolean;
  value: string | null;
  onChange: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function SelectCharger({
  disabled = false,
  type = "all",
  onChange,
  require = false,
  value,
  label = false,
}: SelectChargerProps) {
  const allOptions = [...fastOptions, ...slowOptions];
  const options =
    type === "fast" ? fastOptions : type === "slow" ? slowOptions : allOptions;
  return (
    <div>
      {label && <Label require={require}>충전기 타입</Label>}
      <Select
        disabled={disabled}
        value={value}
        selectText="충전기 타입을 선택해 주세요."
        optionTitle="충전기 타입 선택"
        onChange={onChange}
        options={options}
      />
    </div>
  );
}
