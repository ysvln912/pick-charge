import styled from "styled-components";
import { flexAlignCenter } from "@/styles/common";

export const Item = styled.div`
  cursor: pointer;
  ${flexAlignCenter}
  gap: 1rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  padding: 3px;
  border-radius: 5px;
  transition: all ease 0.3s;
  margin-bottom: 1.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
  }
`;
