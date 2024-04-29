import { flexAlignCenter, flexColumn } from "@/styles/common";
import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  min-height: 90px;
  ${flexAlignCenter};
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
  }
`;

export const ProfilePhotoBox = styled.div`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
  border-radius: 50%;
  overflow: hidden;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Info = styled.div`
  padding: 8px 16px;
  padding-right: 0;
  width: 100%;
  ${flexColumn};
  gap: 8px;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  margin-right: 8px;
`;

export const CreatedAt = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALETTE.gray[300]};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALETTE.gray[400]};
  width: 260px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
