import * as S from "./Rating.style";
import { useState } from "react";
import StarIcon from "@/components/common/icons/StarIcon";

const ratingArr = [1, 2, 3, 4, 5];
const mainColor = "#02c0c0";
const defaultColor = "#EEEEEE";

export default function Rating() {
  const [rating, setRating] = useState<number | null>(1);

  const handleStarClick = (value: number) => {
    setRating(value);
  };

  return (
    <S.Container>
      {ratingArr.map((value) => (
        <S.IconWrapper onClick={() => handleStarClick(value)} key={value}>
          <StarIcon
            width="28"
            height="27"
            color={value <= (rating || 0) ? mainColor : defaultColor}
            key={value}
          />
        </S.IconWrapper>
      ))}
    </S.Container>
  );
}
