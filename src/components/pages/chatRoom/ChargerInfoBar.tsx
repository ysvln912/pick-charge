import { flexAlignCenter, flexColumn } from "@/styles/common";
import React from "react";
import styled from "styled-components";

export interface ChargerInfoBarProps {
  image: string | null;
  name: string;
  address: string;
}

export default function ChargerInfoBar({
  image,
  name,
  address,
}: ChargerInfoBarProps) {
  return (
    <Bar>
      <ImgBox>{image && <Img src={image} alt="충전기 사진" />}</ImgBox>
      <TextBox>
        <Name>{name}</Name>
        <Address>{address}</Address>
      </TextBox>
    </Bar>
  );
}

const Bar = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
  width: 100%;
  max-width: 390px;
  position: fixed;
  top: 56px;
  left: 50%;
  transform: translateX(-50%);
  ${flexAlignCenter};
  gap: 8px;
  padding: 8px 24px;
`;

const ImgBox = styled.div`
  width: 45px;
  height: 45px;
  overflow: hidden;
  border-radius: 8px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextBox = styled.div`
  ${flexColumn};
  gap: 8px;
`;

const Name = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  color: ${({ theme }) => theme.PALETTE.black};
`;

const Address = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.es};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALETTE.gray[400]};
`;
