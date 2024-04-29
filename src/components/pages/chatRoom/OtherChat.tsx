import { flexAlignCenter } from "@/styles/common";
import React from "react";
import styled from "styled-components";
import DefaultProfile from "../chatList/DefaultProfile";

export interface OtherChatProps {
  profileImg: string;
  createdAt: string;
  text: string;
}

export default function OtherChat({
  profileImg,
  createdAt,
  text,
}: OtherChatProps) {
  return (
    <ChatBox>
      <RowBox>
        {profileImg && <Img src={profileImg} />}
        {!profileImg && <DefaultProfile size="md" />}
        <Text>{text}</Text>
      </RowBox>

      <CreatedAt>{createdAt}</CreatedAt>
    </ChatBox>
  );
}

const ChatBox = styled.div`
  width: 80%;
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 8px;
`;

const RowBox = styled.div`
  ${flexAlignCenter};
  gap: 8px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
`;

const Text = styled.div`
  padding: 8px;
  text-align: left;
  background-color: ${({ theme }) => theme.PALETTE.gray[100]};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALETTE.gray[400]};
`;

const CreatedAt = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.es};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALETTE.gray[300]};
`;
