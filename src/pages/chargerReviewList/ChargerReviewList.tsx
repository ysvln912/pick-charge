/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./ChargerReviewList.style";

import { useNavigate } from "react-router-dom";

import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import IconButton from "@/components/common/iconButton/IconButton";
import ReviewItem from "@/components/common/reviewItem/ReviewItem";
import { useGetChargerReview } from "@/hooks/queries/reviews";
import { ReviewResponseInfo } from "@/types/review";

import { useValidParams } from "@/hooks/useValidParams";
import Loading from "@/components/common/loading/Loading";

export default function ChargerReviewList() {
  const handleReviewItemClick = (reviewId: string) => {
    navigate(`/review/${reviewId}`);
  };

  const { id: chargerId } = useValidParams();

  const navigate = useNavigate();

  const { data, isLoading } = useGetChargerReview(chargerId);
  if (isLoading) return <Loading />;

  return (
    <>
      <TopNavigationBar
        text={data?.reviews[0]?.chargerName}
        leftBtn={<IconButton icon="arrowLeft" onClick={() => navigate(-1)} />}
      />

      <S.Container>
        <S.Title>
          <span>{data?.totalReviews}</span>개의 리뷰
        </S.Title>
        <S.Content>
          {data.reviews[0]?.reviewId !== null ? (
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
