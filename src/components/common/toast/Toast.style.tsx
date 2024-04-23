import styled, { css } from "styled-components";
import { ToastType } from "./Toast";

interface ToastProps {
  type: ToastType;
}

const variantCSS = {
  default: css`
    background-color: ${({ theme }) => theme.PALETTE.gray[400]};
    color: ${({ theme }) => theme.PALETTE.white};
  `,
  success: css`
    background-color: ${({ theme }) => theme.PALETTE.primary[100]};
    color: ${({ theme }) => theme.PALETTE.mainColor};
  `,
  error: css`
    background-color: ${({ theme }) => theme.PALETTE.lightRed};
    color: ${({ theme }) => theme.PALETTE.error};
  `,
};

export const Container = styled.div<ToastProps>`
  opacity: 0.8;
  padding: 0.625rem;
  border-radius: 0.3125rem;
  cursor: pointer;
  text-align: center;
  ${({ type }) => type && variantCSS[type]}
`;

export const Content = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`;
