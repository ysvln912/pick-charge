import { useNavigate } from "react-router-dom";
import * as S from "./ChatCard.style";
import DefaultProfile from "../defaultProfile/DefaultProfile";
import getDateFormat from "@/utils/getDateFormat";

export interface ChatCardProps {
  id: string;
  image: string | null;
  name: string;
  createdAt: string;
  text?: string;
}

export default function ChatCard({
  id,
  image,
  name,
  createdAt,
  text = "대화를 기다리고 있어요. 무엇이든 물어보세요!",
}: ChatCardProps) {
  const formatCreatedAt = getDateFormat(createdAt);
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/chat-list/${id}`, {
      state: { card: { id, image, name, createdAt } },
    });
  };
  return (
    <S.Card onClick={onClick}>
      <S.ProfilePhotoBox>
        {!image && <DefaultProfile size="lg" />}
        {image && <S.Img src={image} alt="프로필 사진" />}
      </S.ProfilePhotoBox>
      <S.Info>
        <div>
          <S.Name>{name}</S.Name> <S.CreatedAt>{formatCreatedAt}</S.CreatedAt>
        </div>
        <S.Text>{text}</S.Text>
      </S.Info>
    </S.Card>
  );
}
