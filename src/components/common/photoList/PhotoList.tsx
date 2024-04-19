import React from "react";
import * as S from "./PhotoList.style";
import PhotoCard from "../photoCard/PhotoCard";

export default function PhotoList({ imgs }: { imgs: string[] }) {
  return (
    <S.List>
      {imgs.map((img, index) => {
        return <PhotoCard key={index} url={img}></PhotoCard>;
      })}
    </S.List>
  );
}
