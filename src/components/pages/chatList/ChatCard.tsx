import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ChatCard.style";

export interface ChatCardProps {
  id: string;
  image: string;
  name: string;
  createdAt: string;
  text: string;
}

export default function ChatCard({
  id,
  image,
  name,
  createdAt,
  text,
}: ChatCardProps) {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/chat-list/${id}`);
  };
  return (
    <S.Card onClick={onClick}>
      <S.ProfilePhotoBox>
        <S.Img src={image} alt="프로필 사진" />
      </S.ProfilePhotoBox>
      <S.Info>
        <div>
          <S.Name>{name}</S.Name> <S.CreatedAt>{createdAt}</S.CreatedAt>
        </div>
        <S.Text>{text}</S.Text>
      </S.Info>
    </S.Card>
  );
}
