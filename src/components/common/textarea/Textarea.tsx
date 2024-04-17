/* eslint-disable react-refresh/only-export-components */
import * as S from "./Textarea.style";

import { TextareaHTMLAttributes, Ref, forwardRef } from "react";
import Label from "../label/Label";
import ErrorMessage from "../errorMessage/ErrorMessage";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
}

function Textarea(
  { label, errorMessage, name, ...rest }: TextareaProps,
  ref: Ref<HTMLTextAreaElement>
) {
  return (
    <div>
      {label && <Label htmlFor={name}>{label}</Label>}
      <S.Textarea ref={ref} {...rest} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}

export default forwardRef(Textarea);
