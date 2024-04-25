import Button from "@/components/common/button/Button";
import * as S from "./Done.style";
import done from "@/assets/imgs/done.png";

export default function Done() {
  return (
    <S.Container>
      <S.ImageWrapper>
        <img src={done} alt="회원가입 완료 이미지" />
      </S.ImageWrapper>
      <S.Content>
        <h3>반가워요!</h3>
        <p>회원가입이 완료 되었어요.</p>
        <p>로그인 후 피카충전을 이용해 보세요!</p>
      </S.Content>
      <Button category="normal" size="lg">
        로그인 하러 가기
      </Button>
    </S.Container>
  );
}
