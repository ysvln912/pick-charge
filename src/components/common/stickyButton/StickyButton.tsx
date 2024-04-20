import * as S from "./StickyButton.style";

export interface StickyButtonProps {
  text: string;
  disabled?: boolean;
}

export default function StickButton({
  text,
  disabled = false,
}: StickyButtonProps) {
  return (
    <>
      <S.Container disabled={disabled}>
        <S.BtnText disabled={disabled}>{text}</S.BtnText>
      </S.Container>
    </>
  );
}
