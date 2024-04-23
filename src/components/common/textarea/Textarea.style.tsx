import styled, { css } from "styled-components";
import { TextareaProps } from "./Textarea";
import { ObjMap } from "@/types";

const sizeCSS: ObjMap = {
  sm: css`
    height: 5.43rem;
  `,
  md: css`
    height: 11.81rem;
  `,
  full: css`
    height: 100%;
  `,
};

export const Textarea = styled.textarea<TextareaProps>`
  ${({ size }) => size && sizeCSS[size]}
  width: 100%;
  resize: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
  color: ${({ theme }) => theme.PALETTE.gray[400]};
  padding: 0.81rem 0.75rem;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.PALETTE.mainColor};
  }
  &::placeholder {
    color: ${({ theme }) => theme.PALETTE.gray[200]};
  }

  ${({ error, theme }) =>
    error &&
    css`
      border-color: ${theme.PALETTE.mainColor};
    `}
`;
