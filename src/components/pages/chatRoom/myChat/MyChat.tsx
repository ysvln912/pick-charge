import * as S from "./MyChat.style";

export interface MyChatProps {
  createdAt: string;
  text: string;
}

export default function MyChat({ createdAt, text }: MyChatProps) {
  return (
    <S.ChatBox>
      <S.CreatedAt>{createdAt}</S.CreatedAt>
      <S.Text>{text}</S.Text>
    </S.ChatBox>
  );
}
