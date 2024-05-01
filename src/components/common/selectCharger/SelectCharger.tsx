import { MouseEvent } from "react";

import Label from "@/components/common/label/Label";
import Select from "@/components/common/select/Select";
import ErrorMessage from "@/components/common/errorMessage/ErrorMessage";
import { SelectOptionsType } from "@/components/common/select/Select";

interface OptionsMap {
  [key: string]: SelectOptionsType[];
}

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
  error?: boolean;
  errorMessage?: string;
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
  errorMessage,
  require = false,
  value,
  label = false,
  error = false,
}: SelectChargerProps) {
  const optionsMap: OptionsMap = {
    fast: fastOptions,
    slow: slowOptions,
    all: [...fastOptions, ...slowOptions],
  };
  const options = optionsMap[type] || optionsMap["all"];

  return (
    <div>
      {label && <Label require={require}>충전기 타입</Label>}
      <Select
        error={error}
        disabled={disabled}
        value={value}
        selectText="충전기 타입을 선택해 주세요."
        optionTitle="충전기 타입 선택"
        onChange={onChange}
        options={options}
      />
      {error && (
        <ErrorMessage visible={error}>{errorMessage || error}</ErrorMessage>
      )}
    </div>
  );
}
