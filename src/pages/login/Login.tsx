import * as S from "./Login.style";

import { Link } from "react-router-dom";
import logo from "@/assets/imgs/logo_big.png";
import Button from "@/components/common/button/Button";
import LabelInput from "@/components/common/labelInput/LabelInput";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";

export default function Login() {
  return (
    <>
      <TopNavigationBar text="로그인" />
      <S.Container>
        <S.LogoWrapper>
          <img src={logo} alt="피카충전 로고" />
        </S.LogoWrapper>

        <S.Form>
          <LabelInput label="이메일" placeholder="example@picka.site" />
          <LabelInput
            label="비밀번호"
            placeholder="비밀번호를 입력해 주세요."
          />
          <S.ButtonWrapper>
            <Button size="lg" category="normal">
              이메일 로그인
            </Button>
          </S.ButtonWrapper>
        </S.Form>

        <S.TextWrapper>
          <p>
            계정이 없으신가요?
            <Link to="/signup">
              <span>회원가입</span>
            </Link>
          </p>
        </S.TextWrapper>

        {/* 카카오 및 구글 로그인은 이후 기능 가능하면 퍼블리싱 추가 예정 */}
      </S.Container>
    </>
  );
}
