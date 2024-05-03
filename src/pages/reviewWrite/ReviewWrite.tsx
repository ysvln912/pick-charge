import { useState } from "react";

import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar.tsx";
import IconButton from "@/components/common/iconButton/IconButton.tsx";
import ReviewEditContent from "@/components/pages/reviewWrite/reviewEditContent/ReviewEditContent.tsx";
export interface ReviewType {
  chargerId: number | null;
  rating: number;
  content: string;
  userId: number | null;
}

export default function ReviewWrite() {
  const [data, setData] = useState<ReviewType>({
    chargerId: null,
    rating: 1,
    content: "",
    // 유저 id는 따로 전역 상태에서 가져오기
    userId: null,
  });
  // 저장하는 api handler 함수

  return (
    <>
      <TopNavigationBar
        text="리뷰 작성하기"
        leftBtn={<IconButton icon={"arrowLeft"} />}
      />

      <ReviewEditContent data={data} setData={setData} />
    </>
  );
}
