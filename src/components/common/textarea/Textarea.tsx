/* eslint-disable react-refresh/only-export-components */
import * as S from "./Textarea.style";
import { TextareaHTMLAttributes, Ref, forwardRef, ReactNode } from "react";
import Label from "../label/Label";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { SizeType } from "@/types";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: SizeType;
  label?: ReactNode;
  error?: boolean;
  errorMessage?: string;
}

function Textarea(
  { label, size = "md", error, errorMessage, name, ...rest }: TextareaProps,
  ref: Ref<HTMLTextAreaElement>
) {
  return (
    <div>
      {label && <Label htmlFor={name}>{label}</Label>}
      <S.Textarea error={error} ref={ref} size={size} {...rest} />
      <ErrorMessage visible={error}>{errorMessage}</ErrorMessage>
    </div>
  );
}

export default forwardRef(Textarea);
