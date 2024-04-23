import * as S from "./ReviewItem.style";

import ArrowRightIcon from "../icons/ArrowRightIcon";
import LineIcon from "../icons/LineIcon";
import RatingWithStar from "../ratingWithStar/RatingWithStar";
import test from "@/assets/imgs/logo_big.png";

interface ReviewItemProps {
  date: string;
  address: string;
  rating: string;
  review: string;
  img?: string;
}

export default function ReviewItem(props: ReviewItemProps) {
  const { date, address, rating, review, img } = props;
  return (
    <S.Container>
      <S.Top>
        <S.DateText>{date}</S.DateText>
        <S.DetailWrapper>
          <p>상세 보기</p>
          <ArrowRightIcon />
        </S.DetailWrapper>
      </S.Top>

      <S.Content>
        <S.Left>
          <S.Title>
            <S.Address>{address}</S.Address>
            <LineIcon />
            <RatingWithStar rating={rating} />
          </S.Title>
          <S.ReviewText>{review}</S.ReviewText>
        </S.Left>
        {img && (
          <S.Right>
            <S.ImgBox>
              <img src={test} alt="리뷰 이미지" />
            </S.ImgBox>
          </S.Right>
        )}
      </S.Content>
    </S.Container>
  );
}
