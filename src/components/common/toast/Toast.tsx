import * as S from "./Toast.style";

export type ToastType = "default" | "success" | "error";

export interface ToastProps {
  message: string;
  type?: ToastType;
}

export function Toast({ type = "default", message }: ToastProps) {
  return (
    <S.Container type={type}>
      <S.Content>{message}</S.Content>
    </S.Container>
  );
}
