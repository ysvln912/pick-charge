import { styled } from "styled-components";
import { flexAlignCenter } from "@/styles/common";

export const Container = styled.div`
  ${flexAlignCenter};
  gap: 3px;
`;

export const Rating = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`;
