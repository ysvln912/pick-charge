import React from "react";
import * as S from "./PhotoCard.style";

export default function PhotoCard({ url }: { url: string }) {
  return (
    <S.Card>
      <S.Img src={url} alt="image" />
    </S.Card>
  );
}
