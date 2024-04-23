/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./EmailVerificationInput.style";

import Input from "@/components/common/input/input";
import ErrorMessage from "@/components/common/errorMessage/ErrorMessage";
import Button from "@/components/common/button/Button";
import Timer from "../timer/Timer";
import { useState } from "react";

interface EmailVerificationInputProps {
  label: string;
  placeholder?: string;
  error?: boolean;
  onChange?: () => void;
  name?: string;
  value?: string;
  errorMessage?: string;
  btnText: string;
  timer?: boolean;
}

export default function EmailVerificationInput({
  placeholder,
  label,
  error,
  name,
  value,
  errorMessage,
  onChange,
  btnText,
  timer,
}: EmailVerificationInputProps) {
  const [timeIsOver, setIsTimerOver] = useState(false);

  return (
    <Input>
      <Input.Label htmlFor={name}>{label}</Input.Label>
      <S.Box>
        <Input.Base size="md" error={error}>
          <Input.Center
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            value={value}
          />
          {timer && (
            <Input.Right>
              <Timer minutes={3} setIsTimeOver={setIsTimerOver} />
            </Input.Right>
          )}
        </Input.Base>
        <Button size="sm" category="normal">
          {btnText}
        </Button>
      </S.Box>
      <ErrorMessage visible={error}>{errorMessage}</ErrorMessage>
    </Input>
  );
}
