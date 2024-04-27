import { styled } from "styled-components";
import { flexAlignCenter } from "@/styles/common";

export const Container = styled.div<{ name?: string }>`
  ${flexAlignCenter}
  gap: 0.5rem;
`;
export const IconWrapper = styled.div<{ name?: string }>`
  button {
    cursor: pointer;
    background: transparent;
  }
`;
