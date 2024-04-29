import styled from "styled-components";
import { flexAlignCenter, flexColumn } from "@/styles/common";

export const Card = styled.div`
  width: 340px;
  height: 140px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[200]};
  border-radius: 5px;
  ${flexColumn}
  justify-content: center;
`;

export const List = styled.ul`
  ${flexColumn};
  padding-bottom: 16px;
  gap: 8px;
`;

export const Item = styled.li`
  ${flexAlignCenter};
`;

export const Name = styled.span`
  width: 80px;
  color: ${({ theme }) => theme.PALETTE.mainColor};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.PALETTE.gray[400]};
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
`;
