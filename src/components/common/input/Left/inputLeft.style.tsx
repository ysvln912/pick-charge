import styled, { css } from "styled-components";
import { InputLeftProps } from "./inputLeft";

export const Container = styled.div<InputLeftProps>`
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}
`;
