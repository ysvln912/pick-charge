import React from "react";
import styled from "styled-components";

export interface MyChatProps {
  createdAt: string;
  text: string;
}

export default function MyChat({ createdAt, text }: MyChatProps) {
  return (
    <ChatBox>
      <CreatedAt>{createdAt}</CreatedAt>
      <Text>{text}</Text>
    </ChatBox>
  );
}

const ChatBox = styled.div`
  width: 80%;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 8px;
`;

const CreatedAt = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.es};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALETTE.gray[300]};
`;

const Text = styled.div`
  padding: 8px;
  text-align: left;
  background-color: ${({ theme }) => theme.PALETTE.mainColor};
  border-radius: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALETTE.white};
`;
