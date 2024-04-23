import Select from "../select/Select";
import { SelectOptionsType } from "@/components/common/select/Select";

export default function SelectCharger() {
  const options: SelectOptionsType[] = [
    { DC콤보: "DC콤보" },
    { DC차데모: "DC차데모" },
    { AC3상: "AC3상" },
    { 수퍼차저: "수퍼차저" },
    { 데스티네이션: "데스티네이션" },
    { 완속: "완속" },
  ];

  return (
    <>
      <Select
        selectText="충전기 타입을 선택해 주세요."
        optionTitle="충전기 타입 선택"
        options={options}
      />
    </>
  );
}
