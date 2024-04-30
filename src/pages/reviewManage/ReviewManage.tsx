/* eslint-disable @typescript-eslint/no-unused-vars */
import * as S from "./ReviewManage.style";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar";
import ArrowLeftIcon from "@/components/common/icons/ArrowLeftIcon";
import ReviewItem from "@/components/common/reviewItem/ReviewItem";

const data = [
  {
    id: 1,
    user_id: 1,
    profileImage: "https://source.unsplash.com/random/100x100?user",
    userName: "피카츄",
    content:
      "리뷰 내용이 들어가는 공간입니다. 리뷰 내용이 들어가는 공간입니다. 리뷰 내용이 들어가는 공간입니다. 리뷰 내용이 들어가는 공간입니다. 리뷰 내용이 들어가는 공간입니다. 리뷰 내용이 들어가는 공간입니다.",
    created_date: "2024.04.10",
    charger_name: "상암월드컵파트3단지",
    rating: "3",
    review_image: [
      "https://source.unsplash.com/random/400x300?charger",
      "https://source.unsplash.com/random/400x301?charger",
      "https://source.unsplash.com/random/400x302?charger",
    ],
    used_charger_id: 1,
  },
  {
    id: 2,
    user_id: 2,
    profileImage: "https://source.unsplash.com/random/100x100?user",
    userName: "파이리",
    content:
      "이렇게 다른 유저의 리뷰도 만들어 볼게요. 내용은 이렇게 넣어보죠. 이렇게 다른 유저의 리뷰도 만들어 볼게요. 내용은 이렇게 넣어보죠.",
    created_date: "2024.04.15",
    charger_name: "강남구청",
    rating: "4",
    review_image: [
      "https://source.unsplash.com/random/400x300?charger",
      "https://source.unsplash.com/random/400x301?charger",
    ],
    used_charger_id: 2,
  },
  {
    id: 3,
    user_id: 3,
    profileImage: "https://source.unsplash.com/random/100x100?user",
    userName: "꼬부기",
    content:
      "꼬부기의 리뷰도 추가해볼게요. 리뷰 내용은 이렇게 넣어봤어요. 꼬부기의 리뷰도 추가해볼게요. 리뷰 내용은 이렇게 넣어봤어요.",
    created_date: "2024.04.20",
    charger_name: "서초구청",
    rating: "5",
    review_image: ["https://source.unsplash.com/random/400x300?charger"],
    used_charger_id: 3,
  },
  {
    id: 4,
    user_id: 4,
    profileImage: "https://source.unsplash.com/random/100x100?user",
    userName: "이상해씨",
    content:
      "이상해씨의 리뷰입니다. 새로운 충전소 경험을 공유해요. 이상해씨의 리뷰입니다. 새로운 충전소 경험을 공유해요.",
    created_date: "2024.04.25",
    charger_name: "강북구청",
    rating: "4",
    review_image: ["https://source.unsplash.com/random/400x300?charger"],
    used_charger_id: 4,
  },
  {
    id: 5,
    user_id: 5,
    profileImage: "https://source.unsplash.com/random/100x100?user",
    userName: "리자드",
    content:
      "리자드의 리뷰를 추가합니다. 충전기 위치와 상태가 좋아요. 리자드의 리뷰를 추가합니다. 충전기 위치와 상태가 좋아요.",
    created_date: "2024.04.28",
    charger_name: "노원구청",
    rating: "5",
    review_image: [
      "https://source.unsplash.com/random/400x300?charger",
      "https://source.unsplash.com/random/400x301?charger",
    ],
    used_charger_id: 5,
  },
  {
    id: 6,
    user_id: 6,
    profileImage: "https://source.unsplash.com/random/100x100?user",
    userName: "꼬렛",
    content:
      "꼬렛의 리뷰를 작성합니다. 충전이 빨리 되어서 좋아요. 꼬렛의 리뷰를 작성합니다. 충전이 빨리 되어서 좋아요.",
    created_date: "2024.05.01",
    charger_name: "마포구청",
    rating: "4",
    review_image: [
      "https://source.unsplash.com/random/400x300?charger",
      "https://source.unsplash.com/random/400x301?charger",
      "https://source.unsplash.com/random/400x302?charger",
    ],
    used_charger_id: 6,
  },
  {
    id: 7,
    user_id: 8,
    profileImage: "https://source.unsplash.com/random/100x100?user",
    userName: "냠냠",
    content:
      "냠냠 냠냠 작성합니다. 충전이 빨리 되어서 좋아요. 꼬렛의 리뷰를 작성합니다. 충전이 빨리 되어서 좋아요.",
    created_date: "2024.10.11",
    charger_name: "중구청",
    rating: "1",
    review_image: [],
    used_charger_id: 7,
  },
];

export default function ReviewManage() {
  const [reviews, setReviews] = useState(data);
  const navigate = useNavigate();

  const handleReviewItemClick = (reviewId: number) => {
    navigate(`/review/${reviewId}`);
  };

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
                id: reviewId,
                created_date,
                charger_name,
                rating,
                content,
                review_image,
              } = el;
              return (
                <ReviewItem
                  onClick={() => handleReviewItemClick(reviewId)}
                  key={reviewId}
                  date={created_date}
                  address={charger_name}
                  rating={rating}
                  review={content}
                  img={review_image[0]}
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
