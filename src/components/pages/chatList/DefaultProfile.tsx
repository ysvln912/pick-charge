import ProfileIcon from "@/components/common/icons/ProfileIcon";
import { ObjMap } from "@/types";
import React from "react";
import styled, { css } from "styled-components";

export interface DefaultProfileProps {
  size: "lg" | "md";
}

export default function DefaultProfile({ size }: DefaultProfileProps) {
  return (
    <Profile size={size}>
      <ProfileIcon />
    </Profile>
  );
}

const Profile = styled.div<DefaultProfileProps>`
  ${({ size }) => size && PROFILE_SIZE[size]};
  border: none;
  background-color: ${({ theme }) => theme.PALETTE.gray[300]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const PROFILE_SIZE: ObjMap = {
  lg: css`
    width: 50px;
    height: 50px;
  `,
  md: css`
    width: 40px;
    height: 40px;
  `,
};
