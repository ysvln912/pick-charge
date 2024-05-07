/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useAtom } from "jotai";

import { useNavigate } from "react-router-dom";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar.tsx";
import IconButton from "@/components/common/iconButton/IconButton.tsx";
import ReviewEditContent from "@/components/pages/reviewWrite/reviewEditContent/ReviewEditContent.tsx";
import { reviewAtom } from "@/atoms/reviewAtom";
import { userAtom } from "@/atoms/userAtom";
import reviewApi from "@/apis/review";

import { useValidParams } from "@/hooks/useValidParams";

export default function ReviewEdit() {
  const [review, setReview] = useAtom(reviewAtom);
  const [user] = useAtom(userAtom);

  const { id: reviewId } = useValidParams();
  const navigate = useNavigate();

  const getReviewData = async () => {
    try {
      const response = await reviewApi.getEditReview(reviewId);
      const { imageUrls, ...rest } = response;
      setReview({ ...rest, imgUrl: imageUrls });
    } catch (error) {
      console.log("ERR", error);
    }
  };

  useEffect(() => {
    getReviewData();
    if (!review.userIdMatch) return navigate("/");
  }, [review.userIdMatch]);

  return (
    <>
      <TopNavigationBar
        text="리뷰 수정하기"
        leftBtn={<IconButton icon={"arrowLeft"} />}
      />
      <ReviewEditContent
        submitType="chargerName"
        submitReview={(formData) => reviewApi.patchReview(formData, reviewId)}
      />
    </>
  );
}
