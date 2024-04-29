import ProfileIcon from "@/components/common/icons/ProfileIcon";
import React from "react";
import * as S from "./DefaultProfile.style";

export interface DefaultProfileProps {
  size: "lg" | "md";
}

export default function DefaultProfile({ size }: DefaultProfileProps) {
  return (
    <S.Profile size={size}>
      <ProfileIcon />
    </S.Profile>
  );
}
