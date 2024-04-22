import * as S from "./SignUp.style";

import { Link } from "react-router-dom";
import IconButton from "@/components/common/iconButton/IconButton";
import AccountForm from "@/components/pages/signup/form/account/AccountForm";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import SearchInput from "@/components/common/searchInput/SearchInput";
// import UserInfoForm from "@/components/pages/signup/form/userInfo/UserInfoForm";

export default function SignUp() {
  return (
    <>
      <TopNavigationBar
        text="회원가입"
        leftBtn={<IconButton icon={"arrowLeft"} />}
      />
      <S.Container>
        <SearchInput label="주유소" />
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
