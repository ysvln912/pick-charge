import styled, { css } from "styled-components";
import { InputRightProps } from "./Right";
import { ObjMap } from "@/types";

const colorCSS: ObjMap = {
  default: css`
    color: ${({ theme }) => theme.PALETTE.gray[400]};
  `,
  primary: css`
    color: ${({ theme }) => theme.PALETTE.mainColor};
  `,
};

export const Container = styled.div<InputRightProps>`
  ${({ color }) => color && colorCSS[color]}
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}
`;
