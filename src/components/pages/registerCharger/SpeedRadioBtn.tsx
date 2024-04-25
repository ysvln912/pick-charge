import { flexAlignCenter } from "@/styles/common";
import React, { ChangeEvent } from "react";
import styled from "styled-components";

export interface SpeedRadioBtnProps {
  id: "fast" | "slow";
  value: "급속" | "완속";
  selectedOption?: string | null;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SpeedRadioBtn({
  id,
  value,
  selectedOption,
  onChange,
}: SpeedRadioBtnProps) {
  return (
    <Container>
      <FakeRadioButton
        htmlFor={id}
        checked={selectedOption === value}
      ></FakeRadioButton>
      <RadioInput
        type="radio"
        name="speed"
        id={id}
        value={value}
        onChange={onChange}
      />
      <Label htmlFor={id}>{value}</Label>
    </Container>
  );
}

const Container = styled.div`
  ${flexAlignCenter}
`;

const FakeRadioButton = styled.label<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid
    ${(props) =>
      props.checked
        ? props.theme.PALETTE.mainColor
        : props.theme.PALETTE.gray[200]};
  position: relative;
  cursor: pointer;
  &::before {
    display: ${({ checked }) => (checked ? "block" : "none")};
    content: "";
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.PALETTE.mainColor};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`;

const RadioInput = styled.input`
  display: none;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  margin: 0 4px;
`;
