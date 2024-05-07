import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import * as S from "./ChatList.style";

export default function ChatList() {
  return (
    <S.Container>
      <TopNavigationBar text="나의 채팅" />
      <S.List>
        <p>채팅 내역이 없습니다.</p>
      </S.List>
    </S.Container>
  );
}
