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
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

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
  const [messages, setMessages] = useState<IMessage[]>([]);
  const chatRoomRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView();

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

  // 데이터 요청 함수
  const getChatList = async ({ pageParam }: { pageParam: number }) => {
    console.log(`chatList${pageParam} 요청`);
    const res = await fetch(`/mockData/chatList${pageParam}.json`);
    return res.json();
  };

  // infinity query
  const { data, status, error, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["chatList"],
    queryFn: getChatList,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allpages) => {
      const nextPage = lastPage.length ? allpages.length + 1 : undefined;

      return nextPage;
    },
  });

  // 렌더링
  const content = data?.pages.reverse().map((list: IMessage[]) =>
    list.map((chat, index) => {
      if (index === 0) {
        return chat.user.name === "me" ? (
          <MyChat
            innerRef={ref}
            key={index}
            createdAt={chat.createdAt}
            text={chat.text}
          />
        ) : (
          <OtherChat
            innerRef={ref}
            key={index}
            createdAt={chat.createdAt}
            text={chat.text}
            profileImg={chat.user.profileImg}
          />
        );
      }
      return chat.user.name === "me" ? (
        <MyChat key={index} createdAt={chat.createdAt} text={chat.text} />
      ) : (
        <OtherChat
          key={index}
          createdAt={chat.createdAt}
          text={chat.text}
          profileImg={chat.user.profileImg}
        />
      );
    })
  );

  // useEffect(() => {
  //   if (inView && hasNextPage) {
  //     console.log("재요청");

  //     fetchNextPage();
  //   }
  // }, [inView, hasNextPage, fetchNextPage]);

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error: {error.message}</p>;
  }
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
        <button onClick={() => fetchNextPage()}>이전 채팅 내용 불러오기</button>
        {content}
      </S.List>
      <MessageForm text={text} onChange={onChange} onSubmit={onSubmit} />
      {isOpen && <ChatBottomSheet close={close} open={isOpen} />}
    </S.Container>
  );
}
