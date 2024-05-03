/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./EmailVerificationInput.style";

import { MouseEvent, ChangeEvent, Dispatch, SetStateAction } from "react";

import Input from "@/components/common/input/input";
import ErrorMessage from "@/components/common/errorMessage/ErrorMessage";
import Button from "@/components/common/button/Button";
import Timer from "../timer/Timer";
import { ColorType } from "@/types";

// Q 질문 !!
// => 컴포넌트를 조합해서 사용할 경우 사용하는 속성에 대한 interface 관리 방법이 궁금합니다.
interface EmailVerificationInputProps {
  isVerified?: boolean;
  inputDisabled?: boolean;
  error?: string;
  label: string;
  placeholder?: string;
  btnText: string;
  timer?: boolean;
  disabled?: boolean;
  value?: string;
  name: string;
  setIsTimeOver?: Dispatch<SetStateAction<boolean>>;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  color?: ColorType;
}

const TIMERMINUTES = 3;

export default function EmailVerificationInput({
  isVerified = false,
  disabled = false,
  label,
  error,
  name,
  btnText,
  timer,
  value,
  placeholder,
  inputDisabled = false,
  onClick,
  onChange,
  setIsTimeOver,
}: EmailVerificationInputProps) {
  return (
    <Input>
      <Input.Label htmlFor={name}>{label}</Input.Label>
      <S.Box>
        <Input.Base size="md" disabled={inputDisabled}>
          <Input.Center
            disabled={inputDisabled}
            color="default"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
          {timer && (
            <Input.Right>
              <Timer minutes={TIMERMINUTES} setIsTimeOver={setIsTimeOver} />
            </Input.Right>
          )}
        </Input.Base>
        <Button
          size="sm"
          category={isVerified ? "retry" : disabled ? "disable" : "normal"}
          onClick={onClick}
        >
          {btnText}
        </Button>
      </S.Box>
      <ErrorMessage visible={!!error}>{error}</ErrorMessage>
    </Input>
  );
}
