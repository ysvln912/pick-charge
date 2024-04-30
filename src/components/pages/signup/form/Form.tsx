import * as S from "./Form.style";

import { ReactNode, FormHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export default function SignUpForm({ children, ...rest }: FormProps) {
  return (
    <>
      <S.Form {...rest}>{children}</S.Form>
      <S.TextWrapper>
        <p>
          이미 가입하셨나요?
          <Link to="/login">
            <span>로그인</span>
          </Link>
        </p>
      </S.TextWrapper>
    </>
  );
}
