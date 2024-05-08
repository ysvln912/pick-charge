/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./ReviewManage.style";

import { useNavigate } from "react-router-dom";

import IconButton from "@/components/common/iconButton/IconButton";
import { ReviewResponseInfo } from "@/types/review";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ArrowLeftIcon from "@/components/common/icons/ArrowLeftIcon";
import ReviewItem from "@/components/common/reviewItem/ReviewItem";

import { useGetUserReview } from "@/hooks/queries/reviews";
import Loading from "@/components/common/loading/Loading";

export default function ReviewManage() {
  const navigate = useNavigate();

  const handleReviewItemClick = (reviewId: string) => {
    navigate(`/review/${reviewId}`);
  };

  const { data, isLoading } = useGetUserReview();

  if (isLoading) return <Loading />;

  return (
    <>
      <TopNavigationBar
        leftBtn={<IconButton icon="arrowLeft" onClick={() => navigate(-1)} />}
        text={"리뷰 관리"}
      />
      <S.Container>
        <S.Title>
          내가 작성한 <span>{data.totalReviews}</span>개의 리뷰
        </S.Title>
        <S.Content>
          {data?.reviews.length ? (
            data.reviews.map((el: ReviewResponseInfo) => {
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
                  onClick={() => handleReviewItemClick(String(reviewId))}
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
