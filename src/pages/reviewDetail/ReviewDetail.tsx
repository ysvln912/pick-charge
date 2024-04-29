/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./ReviewDetail.style";

import { useEffect, useState } from "react";

import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import LineIcon from "@/components/common/icons/LineIcon";
import RatingWithStar from "@/components/common/ratingWithStar/RatingWithStar";
import IconButton from "@/components/common/iconButton/IconButton";
import RightIcon from "@/components/common/icons/RightIcon";
import ReviewImages from "@/components/pages/reviewDetail/reviewImages/ReviewImages";

import { useToggle } from "@/hooks/useToggle";
import { useValidParams } from "@/hooks/useValidParams";

import ReviewBottomSheet from "@/components/pages/reviewDetail/reviewBottomSheet/ReviewBottomSheet";

const data = {
  id: 1,
  user_id: 1,
  profileImage: "https://source.unsplash.com/random/100x100?user",
  userName: "피카츄",
  content:
    "이렇게 다른 유저의 리뷰도 만들어 볼게요. 내용은 이렇게 넣어보죠. 이렇게 다른 유저의 리뷰도 만들어 볼게요. 내용은 이렇게 넣어보죠. 리뷰 내용이 들어가는 공간입니다.",
  created_date: "2024.04.10",
  charger_name: "상암월드컵파트3단지",
  rating: "3",
  review_image: [
    "https://source.unsplash.com/random/400x300?charger",
    "https://source.unsplash.com/random/400x301?charger",
    "https://source.unsplash.com/random/400x302?charger",
  ],
  used_charger_id: 1,
};

export default function ReviewDetail() {
  const [review, setReview] = useState(data);
  const { id } = useValidParams();

  //  useEffect(()=>{
  // // 화면 보이면서 useEffect 실행, id 값 보내서 데이터 받아옴
  //  ,[]})

  const { open, close, isOpen } = useToggle(false);

  const {
    id: reviewId,
    profileImage,
    userName,
    content,
    created_date,
    charger_name,
    rating,
    review_image,
    used_charger_id,
  } = review;
  return (
    <>
      <TopNavigationBar leftBtn={<IconButton icon={"arrowLeft"} />} />
      <RightIcon />
      <S.Container>
        <S.Top>
          {/* 작성자 프로필 */}
          <S.ProfileWrapper>
            <S.ProfileImageBox>
              <S.Profile src={profileImage}></S.Profile>
            </S.ProfileImageBox>

            <S.ProfileBox>
              <S.UserNickName>{userName}</S.UserNickName>
              <LineIcon />
              <S.DateText>{created_date}</S.DateText>
            </S.ProfileBox>
          </S.ProfileWrapper>

          <S.MoreIconWrapper>
            <IconButton icon={"more"} onClick={open} />
          </S.MoreIconWrapper>
        </S.Top>

        <S.Content>
          {/* 리뷰 타이틀 */}
          <S.Title>
            <S.Address>{charger_name}</S.Address>
            <LineIcon />
            <RatingWithStar rating={rating} />
          </S.Title>

          {/* 리뷰 내용 */}
          <S.ReviewContent>
            <S.ReviewText>{content}</S.ReviewText>
            <ReviewImages imgs={review_image} />
          </S.ReviewContent>
        </S.Content>
      </S.Container>
      {isOpen && (
        <ReviewBottomSheet
          close={close}
          open={isOpen}
          reviewId={reviewId}
          chargerId={used_charger_id}
        />
      )}
    </>
  );
}
