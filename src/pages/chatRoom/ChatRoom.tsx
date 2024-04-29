import IconButton from "@/components/common/iconButton/IconButton";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ChargerInfoBar from "@/components/pages/chatRoom/ChargerInfoBar";
import ChatBottomSheet from "@/components/pages/chatRoom/ChatBottomSheet";
import MessageForm from "@/components/pages/chatRoom/MessageForm";
import MyChat from "@/components/pages/chatRoom/MyChat";
import OtherChat from "@/components/pages/chatRoom/OtherChat";
import { useToggle } from "@/hooks/useToggle";
import { flexColumn } from "@/styles/common";
import React from "react";
import styled from "styled-components";

export default function ChatRoom() {
  const { open, close, isOpen } = useToggle(false);
  return (
    <Container>
      <TopNavigationBar
        leftBtn={<IconButton icon="arrowLeft" />}
        text="배츠마루"
        rightBtn={<IconButton icon="more" onClick={open} />}
      />
      <ChargerInfoBar
        image="https://plus.unsplash.com/premium_photo-1661598310312-185fd0630045?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJUI2JUE5JUVDJUEwJTg0JUVBJUI4JUIwfGVufDB8fDB8fHww"
        name="송정동 공영주차장"
        address="서울 성동구 동일로 199"
      />
      <List>
        <CreatedAt>2024년 4월 11일</CreatedAt>
        <MyChat createdAt="08:24" text="안녕하세요~ 혹시 충전 가능한가요?" />
        <OtherChat
          profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iPzYmO4980INBLkD7iHIoxyPSD8oM-v7WA&s"
          createdAt="08:30"
          text="네 안녕하세요 오전 9시부터 오후 1시까지 가능합니다"
        />
        <MyChat
          createdAt="08:40"
          text="그럼 내일 오전 10시쯤 방문하면 바로 충전 가능할까요? 미리 예약하고 싶어서요. 충전 비용은 얼마인가요?"
        />
        <OtherChat
          profileImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iPzYmO4980INBLkD7iHIoxyPSD8oM-v7WA&s"
          createdAt="08:45"
          text="오전 10시까지 가능합니다~ 충전 비용은 대략 0000원 입니다."
        />
        <MyChat createdAt="08:50" text="알겠습니다! 내일 방문할게요!" />
      </List>
      <MessageForm />
      {isOpen && <ChatBottomSheet close={close} open={isOpen} />}
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  padding-top: 118px;
  ${flexColumn}
`;

const List = styled.div`
  padding: 16px;
  gap: 16px;
  ${flexColumn};
  width: 100%;
  height: 586px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: block;
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.PALETTE.mainColor};
    border-radius: 10px;
  }
`;

const CreatedAt = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: ${({ theme }) => theme.PALETTE.gray[400]};
`;
