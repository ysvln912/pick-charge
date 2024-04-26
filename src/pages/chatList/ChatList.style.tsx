import styled from "styled-components";
import { flexColumn } from "@/styles/common";

export const Container = styled.section`
  width: 100%;
  padding-top: 56px;
  ${flexColumn}
`;

export const List = styled.div`
  ${flexColumn};
  width: 100%;
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
