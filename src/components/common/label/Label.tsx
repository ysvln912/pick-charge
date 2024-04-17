import * as S from "./Label.style";

import { LabelHTMLAttributes, ReactNode } from "react";

type SizeType = "small" | "medium";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  size?: SizeType;
}

export default function Label({
  children,
  size = "medium",
  ...rest
}: LabelProps) {
  return (
    <S.Label size={size} {...rest}>
      {children}
    </S.Label>
  );
}
