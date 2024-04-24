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
  label?: boolean;
  type?: string;
  value: string | null;
  onChange: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function SelectCharger({
  type = "all",
  onChange,
  value,
  label = false,
}: SelectChargerProps) {
  const allOptions = [...fastOptions, ...slowOptions];
  const options =
    type === "fast" ? fastOptions : type === "slow" ? slowOptions : allOptions;
  return (
    <div>
      {label && <Label>충전기 타입</Label>}
      <Select
        value={value}
        selectText="충전기 타입을 선택해 주세요."
        optionTitle="충전기 타입 선택"
        onChange={onChange}
        options={options}
      />
    </div>
  );
}
