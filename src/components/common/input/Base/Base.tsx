/* eslint-disable react-refresh/only-export-components */
import * as S from "./Base.style";
import { HTMLAttributes, forwardRef, Ref, ReactNode, useState } from "react";

type SizeType = "small" | "medium" | "full";
type ShapeType = "default" | "round";
type ColorType = "default" | "primary";

export interface InputBaseProps extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
  size?: SizeType;
  shape?: ShapeType;
  color?: ColorType;
  isFocus?: boolean;
  disabled?: boolean;
  children: ReactNode;
}

function InputBase(props: InputBaseProps, ref: Ref<HTMLInputElement>) {
  const {
    children,
    error,
    disabled,
    size = "full",
    shape = "default",
    color = "default",
  } = props;

  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <>
      <S.InputContainer
        ref={ref}
        size={size}
        shape={shape}
        color={color}
        error={error}
        disabled={disabled}
        isFocus={isFocus}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      >
        {children}
      </S.InputContainer>
    </>
  );
}

export default forwardRef(InputBase);
