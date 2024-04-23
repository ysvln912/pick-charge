import { styled } from "styled-components";
import {
  flexColumn,
  flexAlignCenter,
  flexSpaceBetweenCenter,
} from "@/styles/common";

export const Container = styled.div`
  padding: 72px 1.5rem;
  ${flexColumn}
  justify-content: center;
  gap: 1rem;
`;

export const Top = styled.div`
  ${flexSpaceBetweenCenter}
`;

export const ProfileWrapper = styled.div`
  ${flexAlignCenter}
  gap: 0.5rem;
`;

export const ProfileImageBox = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 999px;
`;

export const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProfileBox = styled.div`
  ${flexAlignCenter}
  gap: 0.5rem;
`;

export const MoreIconWrapper = styled.div`
  cursor: pointer;
`;

export const UserNickName = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;

export const DateText = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;

export const Content = styled.div``;

export const Title = styled.div`
  ${flexAlignCenter}
  gap: 0.5rem;
  margin-bottom: 8px;
`;

export const Address = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;

export const ReviewContent = styled.div``;

export const ReviewText = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  line-height: 1.3;
  margin-bottom: 1rem;
`;

export const List = styled.ul`
  ${flexColumn}
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const Item = styled.li`
  cursor: pointer;
  ${flexAlignCenter}
  gap: 1rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`;
