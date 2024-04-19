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

/**
 * @example
 * import { useToast } from "@/hooks/useToast";
 * 
 * export default function Test() {
 * const { triggerToast } = useToast();

  const showToast = () => {
    // 기본 값 default
    // triggerToast("토스트 보여주기!");
    // 성공 success
    // triggerToast("토스트 보여주기!", "success");
    // 에러 error
    triggerToast("토스트 보여주기!", "error");
  };

  <Button size="lg" category="nomal" onClick={showToast}>
        클릭하면 토스트가 보여요
  </Button>
 * }
 * */
