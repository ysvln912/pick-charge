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
  error?: boolean | string;
  errorMessage?: string;
  name?: string;
  require?: boolean;
}

function Textarea(
  {
    label,
    size = "md",
    error = false,
    errorMessage,
    name,
    require = false,
    ...rest
  }: TextareaProps,
  ref: Ref<HTMLTextAreaElement>
) {
  return (
    <div>
      {label && (
        <Label htmlFor={name} require={require}>
          {label}
        </Label>
      )}
      <S.Textarea name={name} error={error} ref={ref} size={size} {...rest} />
      <ErrorMessage visible={!!error}>{errorMessage || error}</ErrorMessage>
    </div>
  );
}

export default forwardRef(Textarea);
