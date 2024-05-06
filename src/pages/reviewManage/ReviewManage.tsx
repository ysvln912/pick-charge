/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./ReviewManage.style";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ReviewResponseInfo } from "@/types/review";
import reviewApi from "@/apis/review";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ArrowLeftIcon from "@/components/common/icons/ArrowLeftIcon";
import ReviewItem from "@/components/common/reviewItem/ReviewItem";

export default function ReviewManage() {
  const [reviews, setReviews] = useState<ReviewResponseInfo[]>([]);
  const navigate = useNavigate();

  const handleReviewItemClick = (reviewId: string) => {
    navigate(`/review/${reviewId}`);
  };

  const getReviewData = async () => {
    try {
      // 유저 id
      const id = "1";
      const response = await reviewApi.getUserReview(id);
      setReviews(response);
      console.log(response, "리뷰 관리페이지");
    } catch (error) {
      console.log("ERR", error);
    }
  };

  useEffect(() => {
    getReviewData();
  }, []);
  return (
    <>
      <TopNavigationBar leftBtn={<ArrowLeftIcon />} text={"리뷰 관리"} />
      <S.Container>
        <S.Title>
          {/* 전체 데이터 갯수 따로 */}
          내가 작성한 <span>13</span>개의 리뷰
        </S.Title>
        <S.Content>
          {reviews.length ? (
            reviews.map((el) => {
              const {
                reviewId,
                createAt,
                chargerName,
                rating,
                content,
                imageUrls,
              } = el;
              return (
                <ReviewItem
                  onClick={() => handleReviewItemClick(reviewId)}
                  key={reviewId}
                  date={createAt}
                  address={chargerName}
                  rating={String(rating)}
                  review={content}
                  img={imageUrls[0]}
                />
              );
            })
          ) : (
            <>
              <S.EmptyText>
                <p>아직 리뷰가 없어요!</p>
                <span>충전소에 대한 경험을 공유해 주세요.</span>
              </S.EmptyText>
            </>
          )}
        </S.Content>
      </S.Container>
    </>
  );
}
