import * as S from "./UserInfoForm.style";

import EmailVerificationInput from "@/components/pages/signup/emailVerificationInput/EmailVerificationInput ";
import LabelInput from "@/components/common/labelInput/LabelInput";
import Button from "@/components/common/button/Button";

export default function UserInfoForm() {
  return (
    <S.Form>
      <LabelInput label="이름" placeholder="이름은 변경할 수 없어요." />
      <EmailVerificationInput
        label="닉네임"
        placeholder="닉네임은 이후 변경할 수 있어요."
        btnText="중복 확인"
      />
      <LabelInput
        label="충전기 타입"
        placeholder="사용하는 충전기의 타입을 작성해 주세요."
      />
      <S.ButtonWrapper>
        <Button size="lg" category="normal">
          회원가입 완료
        </Button>
      </S.ButtonWrapper>
    </S.Form>
  );
}
