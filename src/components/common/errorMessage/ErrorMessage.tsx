import * as S from "./ErrorMessage.style";

import { ReactNode } from "react";

export interface ErrorMessageProps {
  children: ReactNode;
}

export default function ErrorMessage(props: ErrorMessageProps) {
  const { children } = props;
  return (
    <>
      <S.ErrorMessage>{children}</S.ErrorMessage>
    </>
  );
}
