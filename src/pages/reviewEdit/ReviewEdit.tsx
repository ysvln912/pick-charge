import { useEffect, useState } from "react";

import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar.tsx";
import IconButton from "@/components/common/iconButton/IconButton.tsx";
import ReviewEditContent from "@/components/pages/reviewWrite/reviewEditContent/ReviewEditContent.tsx";

import { useValidParams } from "@/hooks/useValidParams";
export interface ReviewType {
  chargerId: number | null;
  rating: number;
  content: string;
  userId: number | null;
}

export default function ReviewEdit() {
  const { id: reviewId } = useValidParams();

  useEffect(() => {
    // reviewId 넣어서 api 콜 => data에 set
  }, []);

  const [data, setData] = useState<ReviewType>({
    chargerId: null,
    rating: 1,
    content: "",
    // 유저 id는 따로 전역 상태에서 가져오기
    userId: null,
  });

  // 수정하는 api handler 함수

  return (
    <>
      <TopNavigationBar
        text="리뷰 수정하기"
        leftBtn={<IconButton icon={"arrowLeft"} />}
      />
      <ReviewEditContent data={data} setData={setData} />
    </>
  );
}
