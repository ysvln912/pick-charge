import { styled } from "styled-components";
import { flexColumn } from "@/styles/common";

export const Wrapper = styled.div`
  position: relative;
`;

export const SearchResultsBox = styled.div`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
  background-color: ${({ theme }) => theme.PALETTE.white};
  ${flexColumn};
  position: absolute;
  width: 100%;
  top: 80px;
  left: 0;
  z-index: 1;
`;
