import styled from "styled-components";
import { flexColumn } from "@/styles/common";

export const Container = styled.section`
  margin: 56px 0 68px;
  ${flexColumn};
  height: 720px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: block;
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.PALETTE.mainColor};
    border-radius: 10px;
  }
`;

export const Title = styled.h3`
  padding: 24px 1.5rem 0;
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;
