import * as S from "./Label.style";

import { LabelHTMLAttributes, ReactNode } from "react";
import { SizeType } from "@/types";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  size?: SizeType;
  require?: boolean;
}

export default function Label({
  children,
  size = "md",
  require = false,
  ...rest
}: LabelProps) {
  return (
    <S.Container>
      <S.Label size={size} {...rest}>
        {children}
      </S.Label>
      {require && <S.Require>&#42;</S.Require>}
    </S.Container>
  );
}
