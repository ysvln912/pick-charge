import React from "react";
import * as S from "./MyChat.style";

export interface MyChatProps extends React.HTMLAttributes<HTMLDivElement> {
  createdAt: string;
  text: string;
  innerRef?: React.Ref<HTMLDivElement>;
}

export default function MyChat({
  createdAt,
  text,
  innerRef,
  ...props
}: MyChatProps) {
  return (
    <S.ChatBox {...props} ref={innerRef}>
      <S.CreatedAt>{createdAt}</S.CreatedAt>
      <S.Text>{text}</S.Text>
      {innerRef && <span>첫번째 메시지</span>}
    </S.ChatBox>
  );
}
