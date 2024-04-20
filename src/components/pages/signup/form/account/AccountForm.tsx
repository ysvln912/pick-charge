import * as S from "./AccountForm.style";

import EmailVerificationInput from "@/components/pages/signup/emailVerificationInput/EmailVerificationInput ";
import LabelInput from "@/components/common/labelInput/LabelInput";
import Button from "@/components/common/button/Button";

export default function AccountForm() {
  return (
    <S.Form>
      <EmailVerificationInput
        label="이메일"
        btnText="인증 요청"
        placeholder="example@picka.site"
      />
      <EmailVerificationInput
        label="이메일 인증"
        btnText="인증 확인"
        placeholder="인증코드를 입력해 주세요."
      />
      <LabelInput label="비밀번호" placeholder="비밀번호를 입력해 주세요." />
      <LabelInput
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 한 번 입력해 주세요."
      />
      <S.ButtonWrapper>
        <Button size="lg" category="nomal">
          다음
        </Button>
      </S.ButtonWrapper>
    </S.Form>
  );
}
