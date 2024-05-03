import * as S from "./PhotoCard.style";

export default function PhotoCard({ url }: { url: string }) {
  return (
    <S.Card>
      <S.Img src={url} alt="리뷰 대표 이미지" />
    </S.Card>
  );
}
