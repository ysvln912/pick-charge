import styled, { css } from "styled-components";
import { flexAlignCenter } from "@/styles/common";
import { LabelProps } from "./Label";
import { ObjMap } from "@/types";

const sizeCSS: ObjMap = {
  sm: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  `,
  md: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  `,
};

export const Label = styled.label<LabelProps>`
  ${({ size }) => size && sizeCSS[size]}
  display: inline-block;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;

export const Container = styled.div`
  ${flexAlignCenter}
  gap: 4px;
  margin-bottom: 0.5rem;
`;

export const Require = styled.p`
  color: ${({ theme }) => theme.PALETTE.mainColor};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;
