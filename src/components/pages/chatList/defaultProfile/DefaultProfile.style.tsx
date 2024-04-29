import styled, { css } from "styled-components";
import { ObjMap } from "@/types";
import { DefaultProfileProps } from "./DefaultProfile";

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

export const Profile = styled.div<DefaultProfileProps>`
  ${({ size }) => size && PROFILE_SIZE[size]};
  border: none;
  background-color: ${({ theme }) => theme.PALETTE.gray[300]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
