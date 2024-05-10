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
        <S.EmptyText>
          <p>충전소에 궁금한 점이 있나요?</p>
          <span>문의하기 버튼을 눌러 충전소에 직접 질문해보세요.</span>
        </S.EmptyText>
      </S.List>
    </S.Container>
  );
}
