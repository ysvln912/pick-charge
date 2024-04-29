import styled, { css } from "styled-components";
import { InputCenterProps } from "./Center";
import { ObjMap } from "@/types";

const colorCSS: ObjMap = {
  default: css`
    color: ${({ theme }) => theme.PALETTE.gray[400]};
  `,
  primary: css`
    color: ${({ theme }) => theme.PALETTE.mainColor};
  `,
};

export const Input = styled.input<InputCenterProps>`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  ${({ color }) => color && colorCSS[color]}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${theme.PALETTE.gray[300]};
    `}

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.PALETTE.gray[200]};
  }
`;
