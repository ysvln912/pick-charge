import React from "react";
import * as S from "./TopNavigationBar.style";

export interface TopNavigationBarProps {
  leftBtn?: React.ReactNode;
  text?: string;
  rightBtn?: React.ReactNode;
}

export default function TopNavigationBar({
  leftBtn,
  text,
  rightBtn,
}: TopNavigationBarProps) {
  return (
    <S.Container>
      {leftBtn ? leftBtn : <S.StyleBox />}
      <h2>{text}</h2>
      {rightBtn ? rightBtn : <S.StyleBox />}
    </S.Container>
  );
}
