/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from "./UserInfoForm.style";

import { useState, MouseEvent } from "react";

import EmailVerificationInput from "@/components/pages/signup/emailVerificationInput/EmailVerificationInput ";
import LabelInput from "@/components/common/labelInput/LabelInput";
import Button from "@/components/common/button/Button";
import SelectCharger from "@/components/common/selectCharger/SelectCharger";
import SignUpForm from "@/components/pages/signup/form/Form";

import { useFormValidation } from "@/hooks/useFormValidation";
import { useToast } from "@/hooks/useToast";
import { useSignUp } from "@/hooks/queries/user";

import MESSAGE from "@/constants/message";
interface UserInfoFormProps {
  onNext: () => void;
}

export default function UserInfoForm({ onNext }: UserInfoFormProps) {
  const [charger, setCharger] = useState<string | null>(null);
  const [isNickNameVerified, setIsNickNameVerified] = useState(false);
  const initialState = {
    name: "",
    nickname: "",
  };

  // const { triggerToast } = useToast();
  const { formState, handleInputChange, error } =
    useFormValidation(initialState);
  // const { signUp } = useSignUp();

  const handleChangeCharger = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setCharger(value);
  };

  const isNameInvalid = !!error.name || !formState.name;
  const isFormValid =
    !Object.keys(error).length &&
    formState.name &&
    formState.nickname &&
    isNickNameVerified &&
    charger;

  const handleCheckNickName = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isNameInvalid) {
      // try {
      // await authApi.checkNickname({ nickname: formState.nickname });
      setIsNickNameVerified(true);
      console.log("닉네임 중복확인 검사 성공");
      // } catch (error) {
      //  에러 메세지에 따라
      // triggerToast(MESSAGE.SIGNUP.NICKNAME, "error");
      // }
    }
  };

  const handleUserInfoFormSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isFormValid) {
      // 폼 유효성 검사
      // await signUp(formState);
      console.log("회원가입성공");
      onNext();
    } else {
      console.log("폼 검증 실패");
    }
  };

  return (
    <SignUpForm>
      <LabelInput
        name="name"
        label="이름"
        error={error.name}
        placeholder="이름은 변경할 수 없어요."
        onChange={handleInputChange("name")}
        value={formState.name}
      />
      <EmailVerificationInput
        name="nickname"
        label="닉네임"
        error={error.nickname}
        placeholder="닉네임은 이후 변경할 수 있어요."
        btnText={isNickNameVerified ? "사용 가능" : "중복 확인"}
        onChange={handleInputChange("nickname")}
        onClick={handleCheckNickName}
        value={formState.nickname}
        isVerified={isNickNameVerified}
      />
      <SelectCharger value={charger} label onChange={handleChangeCharger} />
      <S.ButtonWrapper>
        <Button
          type={"submit"}
          size="lg"
          category={isFormValid ? "normal" : "disable"}
          onClick={handleUserInfoFormSubmit}
        >
          회원가입 완료
        </Button>
      </S.ButtonWrapper>
    </SignUpForm>
  );
}
