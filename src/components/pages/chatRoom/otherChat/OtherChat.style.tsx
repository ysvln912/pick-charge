import styled from "styled-components";
import { flexAlignCenter } from "@/styles/common";

export const ChatBox = styled.div`
  width: 80%;
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 8px;
`;

export const RowBox = styled.div`
  ${flexAlignCenter};
  gap: 8px;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
`;

export const Text = styled.div`
  padding: 8px;
  text-align: left;
  background-color: ${({ theme }) => theme.PALETTE.gray[100]};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALETTE.gray[400]};
`;

export const CreatedAt = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.es};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALETTE.gray[300]};
`;
