import * as S from "./SignUp.style";

import { Link } from "react-router-dom";
import AccountForm from "@/components/pages/signup/form/account/AccountForm";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ArrowLeftIconBtn from "@/components/common/iconButtons/ArrowLeftIconBtn";
// import UserInfoForm from "@/components/pages/signup/form/userInfo/UserInfoForm";

export default function SignUp() {
  return (
    <>
      <TopNavigationBar leftBtn={<ArrowLeftIconBtn />} text="회원가입" />
      <S.Container>
        <AccountForm />
        {/* <UserInfoForm /> */}
        <S.TextWrapper>
          <p>
            이미 가입하셨나요?
            <Link to="/login">
              <span>로그인</span>
            </Link>
          </p>
        </S.TextWrapper>
      </S.Container>
    </>
  );
}
