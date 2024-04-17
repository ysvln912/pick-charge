/* eslint-disable react-refresh/only-export-components */
import * as S from "./Textarea.style";

import { TextareaHTMLAttributes, Ref, forwardRef, ReactNode } from "react";
import Label from "../label/Label";
import ErrorMessage from "../errorMessage/ErrorMessage";

type SizeType = "small" | "medium" | "full";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: SizeType;
  label?: ReactNode;
  errorMessage?: string;
}

function Textarea(
  { label, size = "medium", errorMessage, name, ...rest }: TextareaProps,
  ref: Ref<HTMLTextAreaElement>
) {
  return (
    <div>
      {label && <Label htmlFor={name}>{label}</Label>}
      <S.Textarea ref={ref} size={size} {...rest} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}

export default forwardRef(Textarea);
