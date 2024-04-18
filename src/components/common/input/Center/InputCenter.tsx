/* eslint-disable react-refresh/only-export-components */
import * as S from "./InputCenter.style";
import { InputHTMLAttributes, forwardRef, Ref } from "react";

type ColorType = "default" | "primary";

export interface InputCenterProps
  extends InputHTMLAttributes<HTMLInputElement> {
  color?: ColorType;
}

function InputCenter(props: InputCenterProps, ref: Ref<HTMLInputElement>) {
  const { color = "default", ...rest } = props;
  return <S.Input type="text" ref={ref} color={color} {...rest} />;
}

export default forwardRef(InputCenter);
