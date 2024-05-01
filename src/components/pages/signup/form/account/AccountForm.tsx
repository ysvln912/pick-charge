/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./AccountForm.style";

import {
  MouseEvent,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  FormEvent,
} from "react";

import EmailVerificationInput from "@/components/pages/signup/emailVerificationInput/EmailVerificationInput ";
import LabelInput from "@/components/common/labelInput/LabelInput";
import Button from "@/components/common/button/Button";
import SignUpForm from "@/components/pages/signup/form/Form";

import MESSAGE from "@/constants/message";

import { useToast } from "@/hooks/useToast";
import { useFormValidation } from "@/hooks/useFormValidation";
import { UserType } from "@/types";
interface AccountFormProps {
  setData: Dispatch<SetStateAction<UserType>>;
  onNext: () => void;
}

export default function AccountForm({ onNext, setData }: AccountFormProps) {
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [isTimeOver, setIsTimeOver] = useState(false);

  const { triggerToast } = useToast();

  const initialState = {
    email: "",
    code: "",
    password: "",
    passwordCheck: "",
  };

  const { formState, handleInputChange, error, handleSubmit } =
    useFormValidation(initialState);

  const isEmailInvalid = !!error.email || !formState.email;
  const isCodeInvalid = !!error.code || !formState.code || isTimeOver;
  const isFormValid =
    !Object.keys(error).length &&
    formState.password &&
    formState.passwordCheck &&
    isCodeVerified;

  const handleSendEmail = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isCodeVerified) return;
    if (!isEmailInvalid) {
      try {
        // await authApi.sendEmail({ email: formState.email });
        setIsCodeSent(true);
        setIsTimeOver(false);
        console.log("이메일 코드 전송 성공");
      } catch (error) {
        // 에러 메세지
        triggerToast(MESSAGE.SIGNUP.EMAIL, "error");
      }
    }
  };

  const handleCheckCode = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isCodeVerified) return;
    if (!isCodeInvalid && !isTimeOver) {
      try {
        // await authApi.checkCode({ code: formState.code });
        setIsCodeVerified(true);
        setIsCodeSent(false);
        setIsTimeOver(false);
        console.log("이메일 인증 성공");
      } catch (error) {
        // 에러 메세지에 따라 ~ 코드가 올바르지 않습니다 등~
        triggerToast(MESSAGE.SIGNUP.CODE, "error");
      }
    }
  };

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      setData({ ...formState });
      onNext();
    }
  };

  useEffect(() => {
    if (isTimeOver) {
      triggerToast(MESSAGE.SIGNUP.TIMER, "error");
      setIsCodeSent(false);
    }
  }, [isTimeOver]);

  return (
    <SignUpForm onSubmit={handleSubmitForm}>
      <EmailVerificationInput
        name="email"
        label="이메일"
        btnText="인증 요청"
        value={formState.email}
        onChange={handleInputChange("email")}
        placeholder="example@picka.site"
        error={error.email}
        inputDisabled={isCodeSent || isCodeVerified}
        disabled={
          isEmailInvalid || (isCodeSent && !isTimeOver) || isCodeVerified
        }
        onClick={handleSendEmail}
      />
      <EmailVerificationInput
        name="code"
        setIsTimeOver={setIsTimeOver}
        label="이메일 인증"
        btnText={isCodeVerified ? "인증 완료" : "인증 확인"}
        value={formState.code}
        onChange={handleInputChange("code")}
        placeholder="인증코드를 입력해 주세요."
        error={error.code}
        disabled={!isCodeSent || isTimeOver || isCodeVerified}
        inputDisabled={!isCodeSent || isTimeOver || isCodeVerified}
        timer={isCodeSent && !isTimeOver}
        onClick={handleCheckCode}
      />
      <LabelInput
        label="비밀번호"
        type="password"
        name="password"
        placeholder="비밀번호를 입력해 주세요."
        onChange={handleInputChange("password")}
        value={formState.password}
        error={error.password}
      />
      <LabelInput
        label="비밀번호 확인"
        type="password"
        name="passwordCheck"
        placeholder="비밀번호를 다시 한 번 입력해 주세요."
        onChange={handleInputChange("passwordCheck")}
        value={formState.passwordCheck}
        error={error.passwordCheck}
      />
      <S.ButtonWrapper>
        <Button
          type="submit"
          size="lg"
          category={isFormValid ? "normal" : "disable"}
        >
          다음
        </Button>
      </S.ButtonWrapper>
    </SignUpForm>
  );
}
