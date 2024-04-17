import React from "react";
import * as S from "./TopNavigationBar.style";

export interface TopNavigationBarProps {
  layout: "start" | "center" | "startCenter" | "between";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text?: string;
}

export default function TopNavigationBar({
  layout,
  leftIcon,
  rightIcon,
  text,
}: TopNavigationBarProps) {
  return (
    <S.Container layout={layout}>
      {leftIcon && leftIcon}
      <h2>{text}</h2>
      {rightIcon && rightIcon}
    </S.Container>
  );
}
