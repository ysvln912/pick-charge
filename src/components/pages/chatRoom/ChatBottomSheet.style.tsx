import styled from "styled-components";
import { flexAlignCenter, flexColumn } from "@/styles/common";

export const List = styled.ul`
  ${flexColumn}
  gap: .5rem;
  margin-bottom: 1.5rem;
`;

export const Item = styled.li`
  cursor: pointer;
  ${flexAlignCenter}
  gap: 1rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  padding: 3px;
  border-radius: 5px;
  transition: all ease 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
  }
`;
