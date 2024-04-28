import { ChangeEvent } from "react";
import styled from "styled-components";
import { flexAlignCenter } from "@/styles/common";

interface FareInputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FareInput({ value, onChange }: FareInputProps) {
  return (
    <Container>
      <Input
        type="text"
        id="fare"
        name="fare"
        value={value ?? ""}
        onChange={onChange}
      />
      <Label htmlFor="fare">원/kWh</Label>
    </Container>
  );
}

const Container = styled.div`
  ${flexAlignCenter};
`;

const Input = styled.input`
  width: 100px;
  height: 25px;
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
  border-radius: 5px;
  background: transparent;
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  text-align: right;
  padding: 0 10px;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.PALETTE.mainColor};
  }
  &::placeholder {
    color: ${({ theme }) => theme.PALETTE.gray[200]};
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  margin: 0 8px 0 4px;
`;
