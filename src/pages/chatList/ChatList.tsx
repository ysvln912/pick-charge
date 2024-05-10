import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import * as S from "./ChatList.style";
import { useQuery } from "@tanstack/react-query";
import useCheckUserInfo from "@/hooks/useCheckUserInfo";
import myChatApi from "@/apis/chat";
import ChatCard from "@/components/pages/chatList/chatCard/ChatCard";
// import useWebSocket from "@/hooks/useWebSocket";

export interface IMyChatRoom {
  chargerId: number;
  createDate: string;
  nickname: string;
  userImgUrl: string | null;
}

export default function ChatList() {
  // const { isConnected } = useWebSocket();
  // console.log(isConnected);
  const { user } = useCheckUserInfo();
  const { data } = useQuery({
    queryKey: ["myChatRoomList", user.id],
    queryFn: myChatApi.getChatRoomList,
  });
  console.log(data);
  return (
    <S.Container>
      <TopNavigationBar text="나의 채팅" />
      <S.List>
        {data ? (
          data.response.map((room: IMyChatRoom, index: string) => {
            return (
              <ChatCard
                id={index}
                image={room.userImgUrl}
                name={room.nickname}
                createdAt={room.createDate}
              />
            );
          })
        ) : (
          <S.EmptyText>
            <p>충전소에 궁금한 점이 있나요?</p>
            <span>문의하기 버튼을 눌러 충전소에 직접 질문해보세요.</span>
          </S.EmptyText>
        )}
      </S.List>
    </S.Container>
  );
}
