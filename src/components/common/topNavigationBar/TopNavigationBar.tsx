import React from "react";
import * as S from "./TopNavigationBar.style";

export interface TopNavigationBarProps {
  layout: "start" | "center" | "startCenter" | "between";
  leftBtn?: React.ReactNode;
  rightBtn?: React.ReactNode;
  text?: string;
}

export default function TopNavigationBar({
  layout,
  leftBtn,
  rightBtn,
  text,
}: TopNavigationBarProps) {
  return (
    <S.Container layout={layout}>
      {leftBtn && leftBtn}
      <h2>{text}</h2>
      {rightBtn && rightBtn}
    </S.Container>
  );
}
