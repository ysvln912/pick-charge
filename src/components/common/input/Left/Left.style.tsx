import styled, { css } from "styled-components";
import { InputLeftProps } from "./Left";

export const Container = styled.div<InputLeftProps>`
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}
`;
