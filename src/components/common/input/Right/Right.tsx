import * as S from "./Right.style";
import { ReactNode } from "react";
import { ColorType } from "@/types";

export interface InputRightProps {
  children: ReactNode;
  color?: ColorType;
  disabled?: boolean;
}

export default function InputRight({
  color = "default",
  disabled,
  children,
}: InputRightProps) {
  return (
    <S.Container color={color} disabled={disabled}>
      {children}
    </S.Container>
  );
}
