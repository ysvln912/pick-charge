import styled, { css } from "styled-components";
import { LabelProps } from "./Label";

const sizeCSS = {
  small: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  `,
  medium: css`
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  `,
};

export const Label = styled.label<LabelProps>`
  ${({ size }) => size && sizeCSS[size]}
  display: inline-block;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  margin-bottom: 0.5rem;
`;
