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
import getDateFormat from "@/utils/getDateFormat";

import { ReviewResponseInfo } from "@/types/review";
import ReviewBottomSheet from "@/components/pages/reviewDetail/reviewBottomSheet/ReviewBottomSheet";
import reviewApi from "@/apis/review";

export default function ReviewDetail() {
  const { id } = useValidParams();
  const [review, setReview] = useState<ReviewResponseInfo>({
    reviewId: id,
    chargerName: "",
    content: "",
    rating: 0,
    imageUrls: [],
    createAt: new Date(),
    nickname: "",
    profileImage: "",
  });

  const getReviewData = async () => {
    try {
      const response = await reviewApi.getDetailReview(id);
      setReview(response);
      console.log(response, "리뷰 상세페이지");
    } catch (error) {
      console.log("ERR", error);
    }
  };

  useEffect(() => {
    getReviewData();
  }, []);

  const { open, close, isOpen } = useToggle(false);

  const {
    reviewId,
    profileImage,
    nickname,
    content,
    createAt,
    chargerName,
    rating,
    imageUrls,
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
              <S.UserNickName>{nickname}</S.UserNickName>
              <LineIcon />
              <S.DateText>{getDateFormat(createAt)}</S.DateText>
            </S.ProfileBox>
          </S.ProfileWrapper>

          <S.MoreIconWrapper>
            <IconButton icon={"more"} onClick={open} />
          </S.MoreIconWrapper>
        </S.Top>

        <S.Content>
          {/* 리뷰 타이틀 */}
          <S.Title>
            <S.Address>{chargerName}</S.Address>
            <LineIcon />
            <RatingWithStar rating={String(rating)} />
          </S.Title>

          {/* 리뷰 내용 */}
          <S.ReviewContent>
            <S.ReviewText>{content}</S.ReviewText>
            <ReviewImages imgs={imageUrls} />
          </S.ReviewContent>
        </S.Content>
      </S.Container>
      {isOpen && (
        <ReviewBottomSheet close={close} open={isOpen} reviewId={reviewId} />
      )}
    </>
  );
}
