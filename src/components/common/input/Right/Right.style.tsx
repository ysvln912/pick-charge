import styled, { css } from "styled-components";
import { InputRightProps } from "./Right";

const colorCSS = {
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
