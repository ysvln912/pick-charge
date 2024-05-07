/* eslint-disable react-refresh/only-export-components */
import * as S from "./Base.style";
import { forwardRef, Ref, ReactNode, useState } from "react";
import { SizeType, ShapeType, ColorType } from "@/types";

export interface InputBaseStyleProps {
  $error?: boolean;
  $isFocus?: boolean;
  size?: SizeType;
  shape?: ShapeType;
  color?: ColorType;
  disabled?: boolean;
}

export interface InputBaseProps extends InputBaseStyleProps {
  children: ReactNode;
  error?: boolean;
}

function InputBase(props: InputBaseProps, ref: Ref<HTMLInputElement>) {
  const {
    children,
    error = false,
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
        disabled={disabled}
        $isFocus={isFocus}
        $error={!!error}
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
