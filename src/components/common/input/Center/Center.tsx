/* eslint-disable react-refresh/only-export-components */
import * as S from "./Center.style";
import { InputHTMLAttributes, forwardRef, Ref } from "react";
import { ColorType } from "@/types";

export interface InputCenterProps
  extends InputHTMLAttributes<HTMLInputElement> {
  color?: ColorType;
  type?: string;
}

function InputCenter(props: InputCenterProps, ref: Ref<HTMLInputElement>) {
  const { color = "default", type = "text", ...rest } = props;
  return <S.Input type={type} ref={ref} color={color} {...rest} />;
}

export default forwardRef(InputCenter);
