import styled, { css } from "styled-components";
import { InputCenterProps } from "./InputCenter";

const colorCSS = {
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

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.PALETTE.gray[200]};
  }
`;
