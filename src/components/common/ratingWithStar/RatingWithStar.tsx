import * as S from "./RatingWithStar.style";
import StarIcon from "../icons/StarIcon";

interface RatingWithStarProps {
  color?: string;
  rating?: string | number;
}
const mainColor = "#02c0c0";

export default function RatingWithStar({
  color = mainColor,
  rating,
}: RatingWithStarProps) {
  return (
    <S.Container>
      <StarIcon color={color} />
      <S.Rating>{rating}</S.Rating>
    </S.Container>
  );
}
