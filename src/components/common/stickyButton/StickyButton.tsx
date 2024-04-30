import { ButtonHTMLAttributes } from "react";
import * as S from "./StickyButton.style";

export interface StickyButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function StickButton({
  text,
  disabled = false,
  ...rest
}: StickyButtonProps) {
  return (
    <>
      <S.Container disabled={disabled} {...rest}>
        <S.BtnText disabled={disabled}>{text}</S.BtnText>
      </S.Container>
    </>
  );
}
