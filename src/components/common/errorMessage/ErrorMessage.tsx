import * as S from "./ErrorMessage.style";

import { ReactNode } from "react";

export interface ErrorMessageProps {
  children: ReactNode;
  visible?: boolean;
}

export default function ErrorMessage(props: ErrorMessageProps) {
  const { children, visible } = props;
  return (
    <>
      <S.ErrorMessage visible={visible}>{children}</S.ErrorMessage>
    </>
  );
}
