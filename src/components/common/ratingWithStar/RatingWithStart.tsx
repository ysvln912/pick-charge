import * as S from "./RatingWithStart.style";
import StarIcon from "../icons/StarIcon";

interface RatingWithStarProps {
  color?: string;
  rating?: string;
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
