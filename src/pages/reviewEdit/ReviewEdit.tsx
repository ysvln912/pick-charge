/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar.tsx";
import IconButton from "@/components/common/iconButton/IconButton.tsx";
import ReviewEditContent from "@/components/pages/reviewWrite/reviewEditContent/ReviewEditContent.tsx";

import reviewApi from "@/apis/review";

import { useValidParams } from "@/hooks/useValidParams";
export interface ReviewType {
  chargerId: number | null;
  chargerName: string;
  rating: number | null;
  content: string;
  userId: number | null;
  imgs: [];
}

export default function ReviewEdit() {
  const { id: reviewId } = useValidParams();

  const [data, setData] = useState({
    chargerId: null,
    chargerName: "",
    rating: null,
    content: "",
    userId: 1,
    imgs: [],
  });

  const getReviewData = async () => {
    try {
      const response = await reviewApi.getEditReview(reviewId);
      setData(response);
      console.log(response, "리뷰 수정페이지");
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
        text="리뷰 수정하기"
        leftBtn={<IconButton icon={"arrowLeft"} />}
      />
      {/* <ReviewEditContent data={data} setData={setData} /> */}
    </>
  );
}
