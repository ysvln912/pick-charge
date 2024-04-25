import { styled } from "styled-components";
import { flexCenter } from "@/styles/common";

export const Container = styled.div``;

export const MapContent = styled.div`
  background-color: #ccc;
  width: 100%;
  height: 100vh;
`;

export const FavoriteList = styled.ul`
  position: fixed;
  bottom: 0;
  width: 390px;
  height: 423px;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 10px 10px 0 0;
`;

export const IconWrapper = styled.div`
  width: 41px;
  height: 41px;
  margin: -20.5px auto 0;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
  border-radius: 99px;
  ${flexCenter}
`;

export const Title = styled.h3`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;

export const FavoriteItem = styled.div``;
