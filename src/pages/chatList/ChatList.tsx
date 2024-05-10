import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import * as S from "./ChatList.style";
import useWebSocket from "@/hooks/useWebSocket";
import { useEffect } from "react";

export default function ChatList() {
  const { isConnected } = useWebSocket();

  useEffect(() => {
    if (isConnected) {
      // Todo: 채팅 목록 가져오는 api 호출
      console.log("채팅 목록 가져오는 api 호출");
    }
  }, [isConnected]);

  return (
    <S.Container>
      <TopNavigationBar text="나의 채팅" />
      <S.List>
        <p>채팅 내역이 없습니다.</p>
      </S.List>
    </S.Container>
  );
}
