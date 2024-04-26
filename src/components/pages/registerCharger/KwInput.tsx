import { ChangeEvent } from "react";
import styled from "styled-components";
import { flexAlignCenter } from "@/styles/common";

interface KwInputProps {
  id: string;
  label: string;
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function KwInput({
  id,
  label,
  value,
  name,
  onChange,
}: KwInputProps) {
  return (
    <Container>
      <Input
        type="text"
        id={id}
        name={name}
        value={value ?? ""}
        onChange={onChange}
      />
      <Label htmlFor={id}>{label}</Label>
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
