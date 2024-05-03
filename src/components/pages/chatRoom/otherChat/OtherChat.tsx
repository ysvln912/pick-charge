import React from "react";
import DefaultProfile from "../../chatList/defaultProfile/DefaultProfile";
import * as S from "./OtherChat.style";

export interface OtherChatProps extends React.HTMLAttributes<HTMLDivElement> {
  profileImg: string;
  createdAt: string;
  text: string;
  innerRef?: React.Ref<HTMLDivElement>;
}

export default function OtherChat({
  profileImg,
  createdAt,
  text,
  innerRef,
  ...props
}: OtherChatProps) {
  return (
    <S.ChatBox {...props} ref={innerRef}>
      <S.RowBox>
        {profileImg && (
          <S.ImgBox>
            <S.Img src={profileImg} />
          </S.ImgBox>
        )}
        {!profileImg && (
          <S.ImgBox>
            <DefaultProfile size="md" />
          </S.ImgBox>
        )}
        <S.Text>{text}</S.Text>
        {innerRef && <span>첫번째 메시지</span>}
      </S.RowBox>
      <S.CreatedAt>{createdAt}</S.CreatedAt>
    </S.ChatBox>
  );
}
