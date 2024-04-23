import { css } from "styled-components";
import * as S from "./Button.style";
import { ButtonHTMLAttributes } from "react";
import { SizeType } from "@/types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: SizeType;
  category:
    | "normal"
    | "outline"
    | "kakao"
    | "google"
    | "retry"
    | "disable"
    | "rounded";
}
export interface ObjMap {
  [key: string]: ReturnType<typeof css>;
}

export default function Button({ size, category, ...rest }: ButtonProps) {
  return <S.Btn size={size} category={category} {...rest} />;
}
