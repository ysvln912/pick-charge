import styled from "styled-components";
import { flexAlignCenter, flexSpaceBetweenCenter } from "@/styles/common";

export const Container = styled.li`
  cursor: pointer;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[300]};
`;

export const Top = styled.div`
  ${flexSpaceBetweenCenter}
  margin-bottom: 1rem;
`;

export const DateText = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  color: ${({ theme }) => theme.PALETTE.gray[300]};
`;

export const DetailWrapper = styled.div`
  cursor: pointer;
  ${flexAlignCenter}
  gap: .25rem;
  p {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    color: ${({ theme }) => theme.PALETTE.gray[400]};
  }
`;

export const Content = styled.div`
  ${flexAlignCenter}
  gap: 1.5rem;
`;
export const Left = styled.div``;

export const Right = styled.div``;

export const Title = styled.div`
  ${flexAlignCenter}
  gap: 0.5rem;
  margin-bottom: 16px;
`;

export const Address = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;

export const ImgBox = styled.div`
  border: 1px solid #000;
  border-radius: 0.3125rem;
  width: 4.5rem;
  height: 4.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ReviewText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  line-height: 1.3;
`;
