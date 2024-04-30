import * as S from "./ErrorMessage.style";

import { ReactNode } from "react";

export interface ErrorMessageStyleProps {
  $visible?: boolean;
}

export interface ErrorMessageProps extends ErrorMessageStyleProps {
  children: ReactNode;
  visible?: boolean;
}

export default function ErrorMessage(props: ErrorMessageProps) {
  const { children, visible = false } = props;
  return (
    <>
      <S.ErrorMessage $visible={visible}>{children}</S.ErrorMessage>
    </>
  );
}
