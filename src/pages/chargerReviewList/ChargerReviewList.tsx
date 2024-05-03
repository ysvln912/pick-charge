/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./ChargerReviewList.style";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import IconButton from "@/components/common/iconButton/IconButton";
import ReviewItem from "@/components/common/reviewItem/ReviewItem";
import reviewApi from "@/apis/review";

import { ReviewResponseInfo } from "@/types/review";
import { useValidParams } from "@/hooks/useValidParams";

interface ChargerReviewListProps {}

export default function ChargerReviewList() {
  const [reviews, setReviews] = useState<ReviewResponseInfo[]>([]);

  const handleReviewItemClick = (reviewId: string) => {
    navigate(`/review/${reviewId}`);
  };

  const { id: chargerId } = useValidParams();

  const navigate = useNavigate();

  const getReviewData = async () => {
    try {
      const response = await reviewApi.getChargerReview(chargerId);
      setReviews(response);
      console.log(response, "충전소 리뷰 리스트페이지");
    } catch (error) {
      console.log("ERR", error);
    }
  };

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <>
      <TopNavigationBar
        text="충전소 이름 들어가는 곳"
        leftBtn={<IconButton icon={"arrowLeft"} />}
      />

      <S.Container>
        <S.Title>
          {/* 전체 데이터 갯수 따로 */}
          <span>13</span>개의 리뷰
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
