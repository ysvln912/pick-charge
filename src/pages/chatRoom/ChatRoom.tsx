import IconButton from "@/components/common/iconButton/IconButton";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ChargerInfoBar from "@/components/pages/chatRoom/chargerInfoBar/ChargerInfoBar";
import ChatBottomSheet from "@/components/pages/chatRoom/chatBottomSheet/ChatBottomSheet";
import MyChat from "@/components/pages/chatRoom/myChat/MyChat";
import OtherChat from "@/components/pages/chatRoom/otherChat/OtherChat";
import { useToggle } from "@/hooks/useToggle";
import React, { useEffect, useRef, useState } from "react";
import * as S from "./ChatRoom.style";
import MessageForm from "@/components/pages/chatRoom/messageForm/MessageForm";

export interface IUser {
  name: string;
  profileImg: string;
}
export interface IMessage {
  text: string;
  createdAt: string;
  user: IUser;
}

export default function ChatRoom() {
  const { open, close, isOpen } = useToggle(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<IMessage[]>(TEST_DATA);
  const chatRoomRef = useRef<HTMLDivElement>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setText(value);
  };
  // user 정보 가져오는 api
  const user = {
    name: "me",
    profileImg: "",
  };
  const onSubmit = (text: string, createdAt: string) => {
    const message = { text, createdAt, user };
    setMessages((prev) => [...prev, message]);
    setText("");
  };
  useEffect(() => {
    if (chatRoomRef.current) {
      chatRoomRef.current.scrollTop = chatRoomRef.current.scrollHeight;
    }
  }, []);
  useEffect(() => {
    if (chatRoomRef.current) {
      chatRoomRef.current.scrollTop = chatRoomRef.current.scrollHeight;
    }
  }, [messages.length]);
  return (
    <S.Container>
      <TopNavigationBar
        leftBtn={<IconButton icon="arrowLeft" />}
        text="배츠마루"
        rightBtn={<IconButton icon="more" onClick={open} />}
      />
      <ChargerInfoBar
        id="1"
        image="https://plus.unsplash.com/premium_photo-1661598310312-185fd0630045?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJUI2JUE5JUVDJUEwJTg0JUVBJUI4JUIwfGVufDB8fDB8fHww"
        name="송정동 개인 충전소"
        address="서울 성동구 동일로 199"
      />
      <S.List ref={chatRoomRef}>
        <S.CreatedAt>2024년 4월 11일</S.CreatedAt>
        {messages.length > 0 &&
          messages.map((msg, index) => {
            return msg.user.name === "me" ? (
              <MyChat key={index} createdAt={msg.createdAt} text={msg.text} />
            ) : (
              <OtherChat
                key={index}
                createdAt={msg.createdAt}
                text={msg.text}
                profileImg={msg.user.profileImg}
              />
            );
          })}
      </S.List>
      <MessageForm text={text} onChange={onChange} onSubmit={onSubmit} />
      {isOpen && <ChatBottomSheet close={close} open={isOpen} />}
    </S.Container>
  );
}

const TEST_DATA = [
  {
    createdAt: "오후 04:55",
    text: "유저 프로필 이미지 있을 때 + 장문일 때 유저 프로필 이미지 있을 때 + 장문일 때 유저 프로필 이미지 있을 때 + 장문일 때 유저 프로필 이미지 있을 때 + 장문일 때 유저 프로필 이미지 있을 때 + 장문일 때 유저 프로필 이미지 있을 때 + 장문일 때",
    user: {
      name: "other",
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_iPzYmO4980INBLkD7iHIoxyPSD8oM-v7WA&s",
    },
  },
  {
    createdAt: "오후 05:00",
    text: "유저 프로필 이미지 없을 때",
    user: {
      name: "other",
      profileImg: "",
    },
  },
];
