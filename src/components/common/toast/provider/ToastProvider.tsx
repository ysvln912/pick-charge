import * as S from "./ToastProvider.style";
import { PropsWithChildren, createContext, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Toast, ToastType } from "@/components/common/toast/Toast";

/**
 * @todo 상태관리 정해지면 리팩토링
 * 하위 컴포넌트 전체 렌더링 문제
 * */

export interface ToastContextType {
  triggerToast: (message: string, type?: ToastType) => void;
}

export const ToastContext = createContext<ToastContextType>({
  triggerToast: () => {},
});

function ToastProvider(props: PropsWithChildren) {
  const { children } = props;

  const [toastState, setToastState] = useState<{
    message: string;
    type: ToastType;
    isShow: boolean;
  }>({
    message: "",
    type: "default",
    isShow: false,
  });

  const { message, type, isShow } = toastState;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timeoutRef = useRef<any>(null);

  function triggerToast(message: string, type: ToastType = "default") {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setToastState({
      message,
      type,
      isShow: true,
    });

    timeoutRef.current = setTimeout(() => {
      setToastState((prevState) => ({
        ...prevState,
        isShow: false,
      }));
    }, 2500);
  }

  return (
    // <ToastContext.Provider value={{ triggerToast }}>
    //   {children}
    //   {createPortal(
    //     <S.ToastContainer isShow={isShow}>
    //       <Toast message={message} type={type} />
    //     </S.ToastContainer>,
    //     document.querySelector("#root") as Element
    //   )}
    // </ToastContext.Provider>
    <ToastContext.Provider value={{ triggerToast }}>
      {children}
      {createPortal(
        <>
          {isShow ? (
            <S.ToastContainer isShow={isShow}>
              <Toast message={message} type={type} />
            </S.ToastContainer>
          ) : (
            <></>
          )}
        </>,
        document.querySelector("#root") as Element
      )}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
