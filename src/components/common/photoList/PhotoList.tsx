import * as S from "./PhotoList.style";
import PhotoCard from "../photoCard/PhotoCard";

export interface PhotoListProps {
  imgs: string[];
  onClick?: () => void;
}

export default function PhotoList({ imgs, onClick }: PhotoListProps) {
  return (
    <S.List onClick={onClick}>
      {imgs.map((img, index) => {
        return <PhotoCard key={index} url={img}></PhotoCard>;
      })}
    </S.List>
  );
}
