/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./SignUp.style";

import { useState } from "react";

import IconButton from "@/components/common/iconButton/IconButton";
import AccountForm from "@/components/pages/signup/form/account/AccountForm";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import UserInfoForm from "@/components/pages/signup/form/userInfo/UserInfoForm";
import Done from "@/components/pages/signup/done/Done";
import { UserType } from "@/types";
import { useFunnel } from "@/hooks/useFunnel";

const signupSteps = ["계정 정보", "유저 정보", "가입 완료"];

export default function SignUp() {
  const { Funnel, Step, currentStep, handleClickNext } = useFunnel(
    signupSteps[0]
  );

  // TODO : 페이지 상단에서 회원가입 data state 관리 => 4-28일까지
  const [data, setData] = useState<UserType>({
    email: "",
    code: "",
    password: "",
    passwordCheck: "",
    name: "",
    nickname: "",
    charger: "",
  });

  return (
    <>
      {currentStep !== signupSteps[signupSteps.length - 1] && (
        <TopNavigationBar
          text="회원가입"
          leftBtn={<IconButton icon={"arrowLeft"} />}
        />
      )}
      <S.Container>
        <Funnel>
          <Step name={signupSteps[0]}>
            <AccountForm
              data={data}
              onNext={() => handleClickNext(signupSteps[1])}
            />
          </Step>
          <Step name={signupSteps[1]}>
            <UserInfoForm onNext={() => handleClickNext(signupSteps[2])} />
          </Step>
          <Step name={signupSteps[2]}>
            <Done />
          </Step>
        </Funnel>
      </S.Container>
    </>
  );
}
