import * as S from "./Login.style";

// import { useAtom } from "jotai";
// import { Link, useNavigate } from "react-router-dom";

import logo from "@/assets/imgs/logo_big.png";
import Button from "@/components/common/button/Button";
import LabelInput from "@/components/common/labelInput/LabelInput";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";

// import { userAtom } from "@/atoms/userAtom";
import { useToast } from "@/hooks/useToast";
import { useFormValidation } from "@/hooks/useFormValidation";
// import { useLogin } from "@/hooks/queries/user";
import userApi from "@/apis/user";
import TokenService from "@/utils/tokenService";
import MESSAGE from "@/constants/message";

export default function Login() {
  // const [setUser] = useAtom(userAtom);
  const initialState = {
    email: "",
    password: "",
  };
  const { triggerToast } = useToast();
  const { formState, handleInputChange, error, handleSubmit } =
    useFormValidation(initialState);

  // const { login } = useLogin();

  const isFormValid =
    !Object.keys(error).length && formState.email && formState.password;

  const handleLogin = async () => {
    try {
      const response = await userApi.login(formState);
      console.log(response, "로그인 성공");
      // const {id, nickName,username,email,profileImage , chargerType, address} = response;
      // setUser(id,nickName,username,email,profileImage , chargerType, address );
      TokenService.setToken(response.token);
      triggerToast(MESSAGE.LOGIN.SUCCESS, "success");
      // navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TopNavigationBar text="로그인" />
      <S.Container>
        <S.LogoWrapper>
          <img src={logo} alt="피카충전 로고" />
        </S.LogoWrapper>

        {/* <S.Form onSubmit={handleSubmit(() => login(formState))}> */}
        <S.Form onSubmit={handleSubmit(handleLogin)}>
          <LabelInput
            name="email"
            label="이메일"
            placeholder="example@picka.site"
            value={formState.email}
            onChange={handleInputChange("email")}
            error={error.email}
          />
          <LabelInput
            name="password"
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해 주세요."
            value={formState.password}
            onChange={handleInputChange("password")}
            error={error.password}
          />
          <S.ButtonWrapper>
            <Button size="lg" category={isFormValid ? "normal" : "disable"}>
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
