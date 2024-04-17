import { css } from "styled-components";
import * as S from "./Button.style";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "big" | "small";
  category: "nomal" | "kakao" | "google" | "retry" | "disable";
}
export interface ObjMap {
  [key: string]: ReturnType<typeof css>;
}

export default function Button({ size, category, ...rest }: ButtonProps) {
  return <S.Btn size={size} category={category} {...rest} />;
}
