import { flexAlignCenter } from "@/styles/common";
import React, { ChangeEvent } from "react";
import styled from "styled-components";

export interface RadioButtonProps {
  id: "fast" | "slow";
  value: "급속" | "완속";
  selectedOption: string | null;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioButton({
  id,
  value,
  selectedOption,
  handleChange,
}: RadioButtonProps) {
  return (
    <Container>
      <RadioShape htmlFor={id} checked={selectedOption === value}></RadioShape>
      <Input
        type="radio"
        name="speed"
        id={id}
        value={value}
        onChange={handleChange}
      />
      <Label htmlFor={id}>{value}</Label>
    </Container>
  );
}

const Container = styled.div`
  ${flexAlignCenter};
`;

const RadioShape = styled.label<{ checked: boolean }>`
  width: 18px;
  height: 18px;
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

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  margin: 0 4px;
`;
