import * as S from "./Label.style";

import { LabelHTMLAttributes, ReactNode } from "react";
import { SizeType } from "@/types";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  size?: SizeType;
}

export default function Label({ children, size = "md", ...rest }: LabelProps) {
  return (
    <S.Label size={size} {...rest}>
      {children}
    </S.Label>
  );
}
