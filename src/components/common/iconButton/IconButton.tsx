import React, { ButtonHTMLAttributes } from "react";
import * as S from "./IconButton.style";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import EmptyLikeIcon from "../icons/EmptyLikeIcon";
import MoreIcon from "../icons/MoreIcon";
import LikeIcon from "../icons/LikeIcon";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: "arrowLeft" | "arrowDown" | "emptyLike" | "like" | "more";
}

export default function IconButton({ icon, ...rest }: IconButtonProps) {
  return (
    <S.Button {...rest}>
      {icon === "arrowLeft" && <ArrowLeftIcon />}
      {icon === "arrowDown" && <ArrowDownIcon />}
      {icon === "emptyLike" && <EmptyLikeIcon />}
      {icon === "like" && <LikeIcon />}
      {icon === "more" && <MoreIcon />}
    </S.Button>
  );
}
