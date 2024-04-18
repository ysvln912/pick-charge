import styled, { css } from "styled-components";
import { flexAlignCenter } from "@/styles/common";
import { InputBaseProps } from "./InputBase";

const colorCSS = {
  default: css`
    border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
  `,
  primary: css`
    border: 1px solid ${({ theme }) => theme.PALETTE.mainColor};
  `,
};

const sizeCSS = {
  small: css`
    width: 122px;
    padding: 0.56rem 0.375rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  `,
  medium: css`
    width: 253px;
    padding: 0.81rem 0.75rem;
  `,
  large: css`
    width: 326px;
    padding: 0.81rem 0.75rem;
  `,
  full: css`
    width: 100%;
    padding: 0.81rem 0.75rem;
  `,
};

const shapeCSS = {
  default: css`
    border-radius: 4px;
  `,
  round: css`
    border-radius: 999px;
  `,
};

export const InputContainer = styled.div<InputBaseProps>`
  ${({ size }) => size && sizeCSS[size]}
  ${({ shape }) => shape && shapeCSS[shape]}
  ${({ color }) => color && colorCSS[color]}
  ${flexAlignCenter}
  gap: 1rem;
  outline: none;

  ${({ isFocus, theme }) =>
    isFocus &&
    css`
      border-color: ${theme.PALETTE.mainColor};
    `}

  ${({ error, theme }) =>
    error &&
    css`
      border-color: ${theme.PALETTE.mainColor};
    `}


  ${({ disabled, theme }) =>
    disabled &&
    css`
      border-color: ${theme.PALETTE.gray[300]};
      background-color: #f8f8f8;
      color: ${theme.PALETTE.gray[300]};
    `}
`;
