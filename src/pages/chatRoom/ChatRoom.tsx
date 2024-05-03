import IconButton from "@/components/common/iconButton/IconButton";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ChargerInfoBar from "@/components/pages/chatRoom/chargerInfoBar/ChargerInfoBar";
import ChatBottomSheet from "@/components/pages/chatRoom/chatBottomSheet/ChatBottomSheet";
import MyChat from "@/components/pages/chatRoom/myChat/MyChat";
import OtherChat from "@/components/pages/chatRoom/otherChat/OtherChat";
import { useToggle } from "@/hooks/useToggle";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as S from "./ChatRoom.style";
import MessageForm from "@/components/pages/chatRoom/messageForm/MessageForm";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

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
  const {
    state: { card },
  } = useLocation();
  const { open, close, isOpen } = useToggle(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const chatRoomRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView();
  const [scrollHeightBeforeFetching, setScrollHeightBeforeFetching] =
    useState(0);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setText(value);
  };

  // user 정보 가져오는 api 대신 임시 데이터
  const user = {
    name: "me",
    profileImg: "",
  };

  // 전체 페이지네이션 개수 상수
  const TOTAL_PAGE_COUNT = 6;

  // 채팅방 생성 날짜 상수
  const CREATEDAT_CHAT_ROOM = card.createdAt;

  const onSubmit = (text: string, createdAt: string) => {
    const message = { text, createdAt, user };
    setMessages((prev) => [...prev, message]);
    setText("");
  };

  // 채팅방 입장하면 스크롤 최하단으로 이동
  useEffect(() => {
    if (chatRoomRef.current) {
      chatRoomRef.current.scrollTop = chatRoomRef.current.scrollHeight;
    }
  }, []);

  // 새로운 채팅 입력하면 스크롤 최하단으로 이동
  useEffect(() => {
    if (chatRoomRef.current) {
      chatRoomRef.current.scrollTop = chatRoomRef.current.scrollHeight;
    }
  }, [messages.length]);

  // 데이터 요청 함수
  const getChatList = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetch(`/mockData/chatList${pageParam}.json`);
    return res.json();
  };

  // infinity query문
  const { data, status, error, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["chatList", card.id],
    queryFn: getChatList,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allpages) => {
      const nextPage =
        allpages.length < TOTAL_PAGE_COUNT ? allpages.length + 1 : undefined;
      return nextPage;
    },
  });

  // 이전 채팅 내용이 위로 올라오게 거꾸로 렌더링
  const content = useMemo(() => {
    const reversePages = data && [...data.pages].reverse();
    return (
      reversePages &&
      reversePages.map((list: IMessage[]) =>
        list.map((chat, index) => {
          return chat.user.name === "me" ? (
            <MyChat key={index} createdAt={chat.createdAt} text={chat.text} />
          ) : (
            <OtherChat
              key={index}
              createdAt={chat.createdAt}
              text={chat.text}
              profileImg={card.image}
            />
          );
        })
      )
    );
  }, [data]);

  // 채팅방 스크롤 최상단으로 올리면 이전 채팅 내용 GET 요청
  useEffect(() => {
    if (inView && hasNextPage) {
      setScrollHeightBeforeFetching(chatRoomRef.current?.scrollHeight ?? 0);
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  // 이전 채팅 내용 불러오면 스크롤 원위치
  useEffect(() => {
    if (chatRoomRef.current && scrollHeightBeforeFetching !== 0) {
      const currentScrollHeight = chatRoomRef.current.scrollHeight;
      const newScrollPosition =
        currentScrollHeight - scrollHeightBeforeFetching;
      chatRoomRef.current.scrollTop = newScrollPosition;
    }
  }, [data?.pages.length, scrollHeightBeforeFetching]);

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
        <S.CreatedAt ref={ref}>{CREATEDAT_CHAT_ROOM}</S.CreatedAt>
        {content}
      </S.List>
      <MessageForm text={text} onChange={onChange} onSubmit={onSubmit} />
      {isOpen && <ChatBottomSheet close={close} open={isOpen} />}
    </S.Container>
  );
}
