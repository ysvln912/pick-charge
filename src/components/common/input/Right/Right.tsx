import * as S from "./Right.style";
import { ReactNode } from "react";

type ColorType = "default" | "primary";

export interface InputRightProps {
  children: ReactNode;
  color: ColorType;
  disabled?: boolean;
}

function InputRight({
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

export default InputRight;
