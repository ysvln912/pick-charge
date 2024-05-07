import reviewApi from "@/apis/review";
import TopNavigationBar from "@/components/common/topNavigationBar/TopNavigationBar.tsx";
import IconButton from "@/components/common/iconButton/IconButton.tsx";
import ReviewEditContent from "@/components/pages/reviewWrite/reviewEditContent/ReviewEditContent.tsx";
export interface ReviewType {
  chargerName: string;
  chargerId: number | null;
  rating: number;
  content: string;
  userId?: number;
  imgUrl?: File[];
  userIdMatch?: boolean;
}

export default function ReviewWrite() {
  return (
    <>
      <TopNavigationBar
        text="리뷰 작성하기"
        leftBtn={<IconButton icon={"arrowLeft"} />}
      />

      <ReviewEditContent
        submitReview={(formData) => reviewApi.postReview(formData)}
      />
    </>
  );
}
